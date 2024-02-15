
CREATE TABLE roles (
   role_id INT PRIMARY KEY,
    r_name VARCHAR(255) 
);

INSERT INTO roles (role_id, r_name) VALUES
(1, 'Admin'),
(2, 'Customer'),
(3, 'Seller');

CREATE TABLE city (
    city_id INT AUTO_INCREMENT PRIMARY KEY,
    c_name VARCHAR(255) UNIQUE
);


INSERT INTO city (city_id, c_name) VALUES
(1, 'Mumbai'),
(2, 'Pune'),
(3, 'Nagpur'),
(4, 'Nashik');


CREATE TABLE area (
    area_id INT AUTO_INCREMENT PRIMARY KEY,
    area_name VARCHAR(255),
    pincode INT,
    City_code INT,
    CONSTRAINT Fk_Cityid FOREIGN KEY (City_code) REFERENCES city(City_id)
);


INSERT INTO area (area_name, pincode, City_code) VALUES
    ('MHADA', 12345, 1),
    ('Market Yard', 54321, 2),
    ('New Mondha', 67890, 1);

CREATE TABLE users (
    uid INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    role_id INT,
    activation_status BIT DEFAULT 
        CASE 
            WHEN role_id = 3 THEN 0
            ELSE 1 
        END,
    FOREIGN KEY (role_id) REFERENCES roles(role_id)
);



INSERT INTO users (username, password, role_id, activation_status)
VALUES
('user1', 'password1', 1, 1), 
('user2', 'password2', 2, 1), 
('user3', 'password3', 2, 1), 
('user4', 'password4', 3, 1); 


CREATE TABLE consumer (
    consumer_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(25),
    last_name VARCHAR(25),
    phone_no BIGINT UNIQUE,
    email VARCHAR(70) UNIQUE,
    local_area VARCHAR(50),
    user_id INT,
    area_id INT,
    FOREIGN KEY (user_id) REFERENCES users(uid),
    FOREIGN KEY (area_id) REFERENCES area(area_id)
);


INSERT INTO consumer (consumer_id, first_name, last_name, phone_no, email, local_area, user_id, area_id) VALUES
    (1, 'Kunal', 'Bhise', 9876543210, 'kunal@gmail.com', 'AB Chowk', 2, 1),
    (2, 'Mayur', 'Biradar', 1234567890, 'mayur@gmail.com', 'LBS Road', 2, 2),
    (3, 'Akshay', 'Swami', 8765432109, 'akshay@gmail.com', 'Niwara Society', 3, 3),
    (4, 'Pravin', 'Wagh', 9767921052, 'pravin@gmail.com', 'Kranti Chowk', 1, 3);


CREATE TABLE seller (
    seller_id INT AUTO_INCREMENT PRIMARY KEY,
    GST_No VARCHAR(50) UNIQUE,
    License_id VARCHAR(50) UNIQUE,
    Shop_name VARCHAR(70),
    phone_no BIGINT UNIQUE,
    email VARCHAR(70) UNIQUE,
    local_area VARCHAR(50),
    user_id INT,
    area_id INT,
    FOREIGN KEY (user_id) REFERENCES users(uid),
    FOREIGN KEY (area_id) REFERENCES area(area_id)
);


INSERT INTO seller (GST_No, License_id, Shop_name, phone_no, email, local_area, user_id, area_id) VALUES
    ('ABC123', 'LICENSE001', 'ElectroMart', 1234567890, 'electromart@example.com', 'Sadashiv Peth', 1, 1),
    ('XYZ789', 'LICENSE002', 'TechBazaar', 9876543210, 'techbazaar@example.com', 'Tech Park', 2, 2),
    ('PQR456', 'LICENSE003', 'GadgetZone', 8765432109, 'gadgetzone@example.com', 'CIDCO', 3, 3);

