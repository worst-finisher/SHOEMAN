import React, { useState } from 'react';
import Navbar from '../components/Navbar.js';
import { Link, useNavigate } from 'react-router-dom';



const Login = () => {

    const [ credentials, setCredentials ] = useState({ email:"", password:"", });
    let navigate = useNavigate();

    const handleSubmit = async(e)=> {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/user/verify", {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();

        if( !json.success ){
            alert("Enter Valid Credentials")
        }
        else{
            localStorage.setItem("userEmail", credentials.email );
            localStorage.setItem("authToken", json.authToken);
            console.log(localStorage.getItem("authToken"))
            navigate('/');
            console.log("Login Successfully")
        }
    }

    const handleChange = (e)=> {
        setCredentials({...credentials, [e.target.name]:e.target.value})
    }

  return (
    <>
       <Navbar/>
       <div className='container mt-4'>
       <form onSubmit={handleSubmit}>


            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" value={credentials.email}  onChange={handleChange}  />
                <div id="emailHelp" className="form-text">Enter your registered E-mail.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={credentials.password}  onChange={handleChange} />
            </div>
            
            <button type="submit" className="btn btn-outline-success">Log In</button>
            <Link to="/signup" className=' ms-3 btn btn-outline-info'> A New User?</Link>

        </form>
       </div>
    </>
  )
}

export default Login;
