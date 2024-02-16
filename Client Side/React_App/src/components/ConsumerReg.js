// import React, { useState, useEffect } from 'react';

// function ConsumerRegistration() {
//   const [cities, setCities] = useState([]);
//   const [selectedCity, setSelectedCity] = useState('');
//   const [cityName, setCityName] = useState('');
//   // Other form fields state

//   useEffect(() => {
//     // Fetch cities from backend API
//     fetchCities();
//   }, []);

//   const fetchCities = async () => {
//     try {
//       const response = await fetch('/api/cities');
//       if (!response.ok) {
//         throw new Error('Failed to fetch cities');
//       }
//       const data = await response.json();
//       setCities(data);
//     } catch (error) {
//       console.error('Error fetching cities:', error);
//     }
//   };

//   const handleCityChange = async (e) => {
//     const selectedCityId = e.target.value;
//     setSelectedCity(selectedCityId);
//     // Fetch city name based on selectedCityId
//     try {
//       const response = await fetch(`/api/cities/${selectedCityId}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch city name');
//       }
//       const data = await response.json();
//       setCityName(data.c_name);
//     } catch (error) {
//       console.error('Error fetching city name:', error);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//   };

//   return (
//     <div>
//       <h1>Consumer Registration</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="city">Select City:</label>
//           <select id="city" value={selectedCity} onChange={handleCityChange}>
//             <option value="">Select a city</option>
//             {cities.map(city => (
//               <option key={city.c_id} value={city.c_id}>{city.city_name}</option>
//             ))}
//           </select>
//           {cityName && <p>Selected City: {cityName}</p>}
//         </div>
//         {/* Other form fields */}
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default ConsumerRegistration;





import { useReducer, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ConsumerReg() {
    const init = {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_no: "",
        area: 0,
        address:""
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'update':
                return { ...state, [action.fld]: action.val }
            case 'reset':
                return init;
            default:
                return state;
        }
    }

    const [info, dispatch] = useReducer(reducer, init);
       
    
    const [cities, setCities] = useState([]); 
    const [areas, setAreas] = useState([]);
    const [file, setFile] = useState();
    const [msg,setMsg] = useState("");
    const navigate = useNavigate();

    
    useEffect(() => {
        fetch("http://localhost:8080/getCities")
        .then(resp => {
            if(resp.ok)
            {
                return resp.json();
            }
            else{
                throw new Error("server error")
            }
        })
        .then(data => setCities(data))
    }, []); 

   const getAreas = (id) => {
      fetch("http://localhost:8080/getAreas?cid="+id)
      .then(resp => {
        if(resp.ok)
            {
                return resp.json();
            }
            else{
                throw new Error("server error")
            }
      })
      .then(obj => setAreas(obj))
      .catch(error => console.log(error.toString()));
   }

    const sendData = (e) => {
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                username: info.username,
                password: info.password,
                first_name: info.first_name,
                last_name: info.last_name,
                email: info.email,
                phone_no: info.phone_no,       
                area_id: info.area,
                address: info.address
                
            })
        }
        fetch("http://localhost:8080/consumerreg", reqOptions)
            .then(resp => {
                if (resp.ok) {
                     console.log(resp.status)
                    return resp.json();
                }
                else
                    throw new Error("server error");
            })
            .then(obj => {
                alert("Registration successful, Try Login");
                navigate('/')
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div>
            <h1> Consumer Registraction </h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Enter User Name :</label>
                    <input type="text" className="form-control" id="username" name="username" value={info.username}  
                    onChange={(e)=>{dispatch({type:'update',fld:'username', val:e.target.value})}}/>
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Enter Password :</label>
                    <input type="password" className="form-control" id="password" name="password" value={info.password} 
                    onChange={(e)=>{dispatch({type:'update',fld:'password', val:e.target.value})}}/>
                    <div id="pwdHelp" className="form-text">...</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="Shop_name" className="form-label">Enter First Name :</label>
                    <input type="text" className="form-control" id="first_name" name="first_name" value={info.first_name} 
                    onChange={(e)=>{dispatch({type:'update',fld:'first_name', val:e.target.value})}}/>
                    <div id="emailHelp" className="form-text"></div>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="Shop_name" className="form-label">Enter Last Name :</label>
                    <input type="text" className="form-control" id="last_name" name="last_name" value={info.last_name} 
                    onChange={(e)=>{dispatch({type:'update',fld:'last_name', val:e.target.value})}}/>
                    <div id="emailHelp" className="form-text"></div>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Enter User email :</label>
                    <input type="text" className="form-control" id="email" name="email" value={info.email}  
                    onChange={(e)=>{dispatch({type:'update',fld:'email', val:e.target.value})}}/>
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone_no" className="form-label">Enter User phone_no :</label>
                    <input type="number" className="form-control" id="phone_no" name="phone_no" value={info.phone_no}  
                    onChange={(e)=>{dispatch({type:'update',fld:'phone_no', val:e.target.value})}}/>
                    <div id="emailHelp" className="form-text"></div>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">Select City:</label>
                    <select
                        className="form-control"
                        id="city"
                        name="city"
                        value={info.city}
                        onChange={(e)=>getAreas(e.target.value)}>
                        <option value="">Select City</option>
                        {cities.map(city => (
                            <option key={city.city_id} value={city.city_id}>{city.c_name}</option>
                        ))}
                    </select>
                </div>       
                <div className="mb-3">
                    <label htmlFor="area" className="form-label">Select Area:</label>
                    <select
                        className="form-control"
                        id="area"
                        name="area"
                        value={info.area}
                        onChange={(e) => {
                        dispatch({ type: 'update', fld: 'area', val: e.target.value });
                        }}
                    >
                        <option value="">Select Area</option>
                        {areas.map((area) => (
                        <option key={area.area_id} value={area.area_id}>
                            {area.area_name}
                        </option>
                        ))}
                    </select>
                    </div>  

                     <div className="mb-3">
                    <label htmlFor="address" className="form-label">Enter User address :</label>
                    <input type="text" className="form-control" id="address" name="address" value={info.address}  
                    onChange={(e)=>{dispatch({type:'update',fld:'address', val:e.target.value})}}/>
                    <div id="emailHelp" className="form-text"></div>
                </div>  
                
                <button type="submit" className="btn btn-primary mb-3" onClick={(e)=> {sendData(e)}}>Submit</button>
                <button type="reset" className="btn btn-primary mb-3" onClick={()=>{dispatch({type:'reset'})}}>Clear</button>
            </form>
             <p>{JSON.stringify(info)}</p>
            <p>{msg}</p> 
        </div>
    )
} 