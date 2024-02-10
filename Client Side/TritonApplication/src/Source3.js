var mysql = require("mysql2");
var exp = require("express");
var app = exp();
var bp = require("body-parser");
var cors = require("cors");

app.use(bp.json());
app.use(cors());
app.listen(9000, function () {
  console.log("Listening on 9000");
});

var conn = mysql.createConnection({
    host:"localhost",
	user: "root",
	password:"akshayswami@17",
	database:"tritron"
});

conn.connect(function (err) {
  if (!err) {
    console.log("database connected");
  } else console.log("connection failed");
});

app.post("/register", function (req, res) {
    var {
      username,
      password,
      Shop_name,
      email,
      phone_no,
      License_id,
      GST_No,
      city,
      local_area,
      pincode
    } = req.body;
  
    if (!username || !password || !Shop_name || !email || !phone_no || !License_id || !GST_No || !city || !local_area || !pincode) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Begin a transaction
    conn.beginTransaction(function(err) {
      if (err) { 
        console.error("Transaction begin error:", err);
        return res.status(500).json({ status: "failure", error: err.message });
      }
      
      // Insert data into users table
      conn.query(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        [username, password],
        function(err, results) {
          if (err) {
            console.error("User insertion error:", err);
            return conn.rollback(function() {
              res.status(500).json({ status: "failure", error: err.message });
            });
          }

          var uid = results.insertId; // Get the user ID generated for the newly inserted user

          // Insert data into seller table
          conn.query(
            "INSERT INTO seller (user_id, GST_No, License_id, Shop_name, phone_no, email, local_area) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [uid, GST_No, License_id, Shop_name, phone_no, email, local_area],
            function(err, results) {
              if (err) {
                console.error("Seller insertion error:", err);
                return conn.rollback(function() {
                  res.status(500).json({ status: "failure", error: err.message });
                });
              }

              // Commit the transaction
              conn.commit(function(err) {
                if (err) {
                  console.error("Transaction commit error:", err);
                  return conn.rollback(function() {
                    res.status(500).json({ status: "failure", error: err.message });
                  });
                }

                console.log("Registration successful. User ID:", uid);
                res.json({ status: "success" });
              });
            }
          );
        }
      );
    });
});
