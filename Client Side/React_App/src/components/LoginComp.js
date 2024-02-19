// import React, { useReducer, useState } from 'react'; // Added import
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from './slice';
// import './LoginComp.css';


// export default function LoginComp() {
//   const init = {
//     uid: "",
//     pwd: ""
//   };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case 'update':
//         return { ...state, [action.fld]: action.val };
//       case 'reset':
//         return init;
//       default:
//         return state;
//     }
//   };

//   const [info, dispatch] = useReducer(reducer, init);
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();
//   const reduxAction = useDispatch();
//   const mystate = useSelector((state) => state.logged);

//   const handleChange = (e, field) => {
//     dispatch({ type: 'update', fld: field, val: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Your login submission logic here
//   };

//   const handleClear = () => {
//     dispatch({ type: 'reset' });
//   };

//   const sendData = (e) => {
//     e.preventDefault();
//     const reqOptions = {
//       method: 'POST',
//       headers: { 'content-type': 'application/json' },
//       body: JSON.stringify({
//         username: info.uid,
//         password: info.pwd
//       })
//     };

//     fetch("http://localhost:8080/checkUser", reqOptions)
//       .then(resp => {
//         if (resp.ok) {
//           return resp.json();
//         } else {
//           throw new Error("Server Error");
//         }
//       })
//       .then(obj => {
//         if (obj === null) {
//           setMsg("Wrong UID/PWD");
//         } else {
//           reduxAction(login());
//           if (obj.activation_status === false) {
//             alert("Request has not been approved");
//           } else {
//             switch (obj.role.role_id) {
//               case 1:
//                 navigate("/admin_home");
//                 reduxAction(login());
//                 break;
//               case 2:
//                 navigate("/consumer_home");
//                 reduxAction(login());
//                 break;
//               case 3:
//                 navigate("/seller_home");
//                 reduxAction(login());
//                 break;
//               default:
//                 break;
//             }
//           }
//         }
//       })
//       .catch((error) => alert("Error : " + error.toString()));
//   };

// //   return (
// //     <div className="container mt-5 login-form-container col-6"  style={{ backgroundColor: 'lightgrey', padding: '20px', border: '1px solid ', borderRadius: '10px' }}>

// //       <h1 className="title">Login Page</h1>
// //       <form onSubmit={handleSubmit}>
// //         <div className="form-group">
// //           <label htmlFor="uid" className="text-center mb-4">Enter User Name:</label>
// //           <input type="text" className="form-control" id="uid" name="uid" value={info.uid} onChange={(e) => handleChange(e, 'uid')} />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="pwd" className="text-center mb-4">Enter Password:</label>
// //           <input type="password" className="form-control" id="pwd" name="pwd" value={info.pwd} onChange={(e) => handleChange(e, 'pwd')} />
// //         </div>
// //         <button type="submit" className="btn btn-primary" onClick={(e) => { sendData(e) }}>Submit</button>
// //         <button type="button" className="btn btn-primary" onClick={handleClear}>Clear</button>
// //       </form>
// //       {/* <p>{JSON.stringify(info)}</p> */}
// //       <p className="error-message">{msg}</p>
// //     </div>
// //   );
// // }
// // className="container mt-5 login-form-container col-6"
// return (
//   // <div className='box'>
    
//   //   <form className="my-4">
//   //     <div className="mb-3 row">
//   //       <label htmlFor="username" className="col-sm-2 col-form-label">
//   //         Enter Username:
//   //       </label>
//   //       <div className="col-sm-4">
//   //         <input
//   //           type="text"
//   //           className="form-control form-control-sm"
//   //           id="username"
//   //           name="username"
//   //           value={info.username}
//   //           onChange={(e) => {
//   //             dispatch({
//   //               type: "update",
//   //               fld: "username",
//   //               val: e.target.value,
//   //             });
//   //           }}
//   //         />
//   //       </div>
//   //     </div>
//   //     <div className="mb-3 row">
//   //       <label htmlFor="password" className="col-sm-2 col-form-label">
//   //         Enter Password:
//   //       </label>
//   //       <div className="col-sm-4">
//   //         <input
//   //           type="password"
//   //           className="form-control form-control-sm"
//   //           id="password"
//   //           name="password"
//   //           value={info.password}
//   //           onChange={(e) => {
//   //             dispatch({
//   //               type: "update",
//   //               fld: "password",
//   //               val: e.target.value,
//   //             });
//   //           }}
//   //         />
//   //       </div>
//   //     </div>
//   //     <div className="row">
//   //       <div className="col-sm-2"></div>
//   //       <div className="col-sm-10">
//   //         <button
//   //           type="submit"
//   //           className="btn btn-primary me-2"
//   //           onClick={(e) => {
//   //             sendData(e);
//   //           }}
//   //         >
//   //           Submit
//   //         </button>
//   //         <button
//   //           type="reset"
//   //           className="btn btn-danger"
//   //           onClick={() => {
//   //             dispatch({ type: "reset" });
//   //           }}
//   //         >
//   //           Reset
//   //         </button>
//   //       </div>
//   //     </div>
//   //   </form>

//   //   {/* <p>{JSON.stringify(info)}</p> */}
//   //   {/* <Image className="image-container" src={img}></Image> */}
//   // </div>
//   <div className='box'>
//   <form className="my-4">
//     <div className="mb-3 row">
//       <label htmlFor="username" className="col-sm-2 col-form-label">
//         Enter Username:
//       </label>
//       <div className="col-sm-4">
//         <input
//           type="text"
//           className="form-control form-control-sm"
//           id="username"
//           name="username"
//           value={info.username}
//           onChange={(e) => {
//             dispatch({
//               type: "update",
//               fld: "username",
//               val: e.target.value,
//             });
//           }}
//         />
//       </div>
//     </div>
//     <div className="mb-3 row">
//       <label htmlFor="password" className="col-sm-2 col-form-label">
//         Enter Password:
//       </label>
//       <div className="col-sm-4">
//         <input
//           type="password"
//           className="form-control form-control-sm"
//           id="password"
//           name="password"
//           value={info.password}
//           onChange={(e) => {
//             dispatch({
//               type: "update",
//               fld: "password",
//               val: e.target.value,
//             });
//           }}
//         />
//       </div>
//     </div>
//     <div className="row">
//       <div className="col-sm-2"></div>
//       <div className="col-sm-10 d-flex justify-content-start">
//         <button
//           type="submit"
//           className="btn btn-primary me-2"
//           onClick={(e) => {
//             sendData(e);
//           }}
//         >
//           Submit
//         </button>
//         <button
//           type="reset"
//           className="btn btn-danger"
//           onClick={() => {
//             dispatch({ type: "reset" });
//           }}
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   </form>
// </div>


// );
// }



import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './slice';
import './LoginComp.css';

export default function LoginComp() {
  const initialState = {
    username: "",
    password: ""
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.field]: action.value };
      case 'reset':
        return initialState;
      default:
        return state;
    }
  };

  const [formData, dispatch] = useReducer(reducer, initialState);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const reduxDispatch = useDispatch();

  const handleChange = (e, field) => {
    dispatch({ type: 'update', field, value: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/checkUser", {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        })
      });

      if (!response.ok) {
        throw new Error("Server Error");
      }

      const data = await response.json();
      if (data === null) {
        setErrorMsg("Wrong Username/Password");
      } else {
        reduxDispatch(login());
        if (!data.activation_status) {
          alert("Request has not been approved");
        } else {
          switch (data.role.role_id) {
            case 1:
              navigate("/admin_home");
              break;
            case 2:
              navigate("/consumer_home");
              break;
            case 3:
              navigate("/seller_home");
              break;
            default:
              break;
          }
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error: " + error.message);
    }
  };

  const handleClear = () => {
    dispatch({ type: 'reset' });
    setErrorMsg("");
  };

  return (
    <div className='box'>
      <form className="my-4" onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label htmlFor="username" className="col-sm-2 col-form-label">
            Enter Username:
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control form-control-sm"
              id="username"
              name="username"
              value={formData.username}
              onChange={(e) => handleChange(e, 'username')}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Enter Password:
          </label>
          <div className="col-sm-4">
            <input
              type="password"
              className="form-control form-control-sm"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e, 'password')}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary me-2">Submit</button>
            <button type="button" className="btn btn-danger" onClick={handleClear}>Clear</button>
          </div>
        </div>
      </form>
      {errorMsg && <p className="error-message">{errorMsg}</p>}
    </div>
  );
}
