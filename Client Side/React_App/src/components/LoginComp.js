import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './slice';



export default function LoginComp (){


    const init = {
        uid: "",
        pwd: ""
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
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const reduxAction = useDispatch();  //...........
    const mystate = useSelector((state)=>state.logged);

    const handleChange = (e, field) => {
        dispatch({ type: 'update', fld: field, val: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your login submission logic here
    }

    const handleClear = () => {
        dispatch({ type: 'reset' });
    }
    

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
        fetch("http://localhost:8080/checkUser",reqOptions)
        .then(resp =>  {
            console.log(resp.status)
            if(resp.ok)
            {
                console.log(resp.status);
                return resp.json();
            }
            else
            {
                //console.log(resp.statusText);
                throw new Error("Server Error");
            }
        })
        .then(obj => {
                    if(obj === null)
                    {
                        setMsg("Wrong UID/PWD");
                    }
                    else
                    {
                        reduxAction(login())
                        if(obj.activation_status === false)
                        {
                            alert("Request has not been approved");
                        }
                        else{
                            if(obj.role.role_id === 1)
                            {
                                navigate("/admin_home");
                                reduxAction(login());
                            }
                            else if (obj.role.role_id === 2)
                            {
                                navigate("/customer_home");
                                reduxAction(login());
                            }
                            else if (obj.role.role_id === 3)
                            {
                                navigate("/seller_home");
                                reduxAction(login());
                            }
                            
                        }
                    }
        })
        .catch((error)=> alert("Error : "+error.toString()))
    }

    return (
        <div>
            <h1> Login Page </h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="uid" className="form-label">Enter User Name :</label>
                    <input type="text" className="form-control" id="uid" name="uid" value={info.uid} onChange={(e) => handleChange(e, 'uid')} /> <br />
                    <div id="emailHelp" className="form-text">We'll never share email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Enter Password :</label>
                    <input type="password" className="form-control" id="pwd" name="pwd" value={info.pwd} onChange={(e) => handleChange(e, 'pwd')} />
                    <div id="pwdHelp" className="form-text">...</div>
                </div>
                <button type="submit" className="btn btn-primary mb-3" onClick={(e)=> {sendData(e)}}>Submit</button>
                <button type="button" className="btn btn-primary mb-3" onClick={handleClear}>Clear</button>
            </form>
            <p>{JSON.stringify(info)}</p>
            <p>{msg}</p>
        </div>
    )
}


