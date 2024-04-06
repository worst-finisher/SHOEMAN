import React from 'react'
import { Link , useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
         localStorage.removeItem("authToken");
         navigate("/login");
    }

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar bg-dark bg-body-tertiary">
      <div className="container-fluid">
                <Link className="navbar-brand text-success fs-3 fw-bold" to="/">Shoeman</Link>
                <button className="navbar-toggler" style={{"backgroundColor":"#198754"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon" style={{"color":"green"}}></span> */}
                -
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  mb-2 mb-lg-0">
                    {/* <li className="nav-item">
                    <Link className="nav-link text-success fw-bold" aria-current="page" to="/">Home</Link>
                    </li> */}
                {
                        (localStorage.getItem("authToken") )?
                        <>
                            <li className="nav-item">
                            <Link className="nav-link text-success fw-bold" aria-current="page" to="/myorder">My Orders</Link>
                            </li>
                            {/* <li className="nav-item">
                            <Link className="nav-link text-success fw-bold" aria-current="page" to="/">My Cart</Link>
                            </li> */}
                        </>
                            
                        : ""
                }
                </ul>

                {/* <form className=" ms-auto" role="search">
                    <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" value={search}  onChange={(e)=>{setSearch(e.target.value)}}/>
                </form> */}
                
                {
                        (!localStorage.getItem("authToken") )?
                        <div className='d-flex ms-auto'>
                            <Link className="btn btn-outline-success mx-2" to="/login">Login</Link>
                            <Link className="btn btn-outline-info mx-2" to="/signup">SignUp</Link>
    
                        </div>
                        :
                        <div className=' d-flex ms-auto my-auto'>
                              <form className=" ms-auto" role="search">
                                <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                              </form>
                            <button className=" btn btn-outline-danger mx-2 " to="/login" onClick={handleLogout}>Log Out</button>
                        </div>    
                }

                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar;
