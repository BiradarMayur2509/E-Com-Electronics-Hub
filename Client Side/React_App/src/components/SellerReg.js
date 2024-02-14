import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function SellerReg() {

    const init = {
        username: "",
    password: "",
    Shop_name: "",
    email: "",
    phone_no: "",
    License_id: "",
    GST_No: "",
    city: "",
    local_area: "",
    }

    

    const reducer = (state, action) => {
            switch(action.type)
            {
                case 'update':
                    return {...state , [action.fld]:action.val}
                    case 'reset' :
                        return init;
            }
    }



    const [info, dispatch] = useReducer(reducer,init) ;
    const [file, setFile] =useState();
    const navigate= useNavigate();

    const sendData = (e) => {
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
                username  : info.uid,
                password : info.pwd
            })
        }
        fetch("http://localhost:8080/sellerReg",reqOptions)
        .then(resp => {
            if(resp.ok)
                return resp.json();
            else
                throw new Error("server error");
        })
        .then(obj => {
            alert("Registration successful, Try Login");
            navigate('/')
        })
       
        }



    return (
        <div>
            <h1> Seller Registraction </h1>
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
                    <label htmlFor="Shop_name" className="form-label">Enter Shop_name :</label>
                    <input type="text" className="form-control" id="Shop_name" name="Shop_name" value={info.Shop_name} 
                    onChange={(e)=>{dispatch({type:'update',fld:'Shop_name', val:e.target.value})}}/>
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
                    <label htmlFor="License_id" className="form-label">Enter User License_id :</label>
                    <input type="text" className="form-control" id="License_id" name="License_id" value={info.License_id}  
                    onChange={(e)=>{dispatch({type:'update',fld:'License_id', val:e.target.value})}}/>
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="GST_No" className="form-label">Enter User GST_No :</label>
                    <input type="text" className="form-control" id="GST_No" name="GST_No" value={info.GST_No}  
                    onChange={(e)=>{dispatch({type:'update',fld:'GST_No', val:e.target.value})}}/>
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="local_area" className="form-label">Enter User local_area :</label>
                    <input type="text" className="form-control" id="local_area" name="local_area" value={info.local_area}  
                    onChange={(e)=>{dispatch({type:'update',fld:'local_area', val:e.target.value})}}/>
                    <div id="emailHelp" className="form-text"></div>
                </div>
                
                <button type="submit" className="btn btn-primary mb-3" onClick={(e)=> {sendData(e)}}>Submit</button>
                <button type="reset" className="btn btn-primary mb-3" onClick={()=>{dispatch({type:'reset'})}}>Clear</button>
            </form>
            {/* <p>{JSON.stringify(info)}</p>
            <p>{msg}</p> */}
        </div>
    )
} 