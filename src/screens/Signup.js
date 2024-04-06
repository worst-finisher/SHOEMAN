import React, { useState } from 'react';
import Navbar from '../components/Navbar.js';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {

    const [ credentials, setCredentials ] = useState({ name:"", email:"", password:"", location:"" });
    const navigate = useNavigate();

    const handleSubmit = async(e)=> {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/user/create", {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.location })
        });
        const json = await response.json();

        if( !json.success ){
            alert("Enter Valid Credentials")
        }
        else{
            console.log("SignUp Successfully")
            navigate("/login");
        }
    }

    const handleChange = (e)=> {
        setCredentials({...credentials, [e.target.name]:e.target.value})
    }

  return (
    <>
       <Navbar/>
       
       {/* <div class="d-flex justify-content-center align-items-center container mt-4 ">

       <div class="row "> */}
       <div className='container mt-4'>
       <form onSubmit={handleSubmit}  >

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={handleChange}  />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" value={credentials.email}  onChange={handleChange}  />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={credentials.password}  onChange={handleChange}  />
            </div>

            <div className="mb-3">
                <label htmlFor="location" className="form-label">City</label>
                <input type="text" className="form-control" id="location" name="location" value={credentials.location}  onChange={handleChange}  />
            </div>

            
            <button type="submit" className="btn btn-outline-success">Submit</button>
            <Link to="/login" className=' ms-3 btn btn-outline-danger'> Already a User</Link>

        </form>
       </div>

       {/* </div>
       </div> */}
    </>
  )
}

export default Signup;
