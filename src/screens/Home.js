import React , { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ShoeCard from '../components/ShoeCard.js';
import Footer from '../components/Footer.js';
import Carousel from '../components/Carousel.js';
import Modal from '../Modal.js';
import Cart from './Cart.js';
import { useCart } from '../components/ContextReducer.js';

const Home = () => {

    const [ shoeCate, setShoeCate ] = useState([]);
    const [ shoes, setShoes ] = useState([]);
    const [ search, setSearch ] = useState('');
    const [ view, setView ] = useState(false);

    let data = useCart();

    let loadData = async ()=> {
        let categoryResponse = await fetch("http://localhost:5000/shoe/category", {
            method: "GET"
        });
        categoryResponse = await categoryResponse.json();

        let shoeResponse = await fetch("http://localhost:5000/shoe", {
            method: "GET"
        });
        shoeResponse = await shoeResponse.json();

        setShoes(shoeResponse);
        setShoeCate(categoryResponse);
    }

    useEffect( () => {
        loadData();
    },[]);

    const navigate = useNavigate();

    const handleLogout = () => {
         localStorage.removeItem("authToken");
         navigate("/login");
    }

  return (
    <>
    <div id="liveAlertPlaceholder"></div>
      <nav className="navbar navbar-expand-lg navbar bg-dark bg-body-tertiary">
      <div className="container-fluid">
                <Link className="navbar-brand text-success fs-3 fw-bolder" to="/"><b>SHOEMAN</b></Link>
                <button className="navbar-toggler" style={{"backgroundColor":"#198754"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                -
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                

                {
                        (localStorage.getItem("authToken") )?
                        <>
                            <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link text-success fw-bold" aria-current="page" to="/myorder">My Orders</Link>
                            </li>
                            </ul>

                            
                            <div className=" btn text-success fw-bold" onClick={()=>{setView(true)}} > <i className="fa fa-shopping-cart"></i>{"  "} { "("+data.length+")" } </div>
                            { 
                               view ?
                               <Modal onClose={()=>{setView(false)}}><Cart/></Modal>
                                :
                                null
                            }
                            
                        </>
                            
                        : ""
                }
                
                
                {
                        (!localStorage.getItem("authToken") )?
                        <div className='d-flex ms-auto'>
                              <form className=" ms-auto" role="search">
                                <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" value={search}  onChange={(e)=>{setSearch(e.target.value)}}/>
                              </form>
                            <Link className="btn btn-outline-success mx-2" to="/login">Login</Link>
                            <Link className="btn btn-outline-info mx-2" to="/signup">SignUp</Link>
    
                        </div>
                        :
                        <div className=' d-flex ms-auto my-auto'>
                              <form className=" ms-auto" role="search">
                                <input className="form-control me-2 " type="search" placeholder="Search what you like..." aria-label="Search" value={search}  onChange={(e)=>{setSearch(e.target.value)}}/>
                              </form>
                            <button className=" btn btn-outline-danger mx-2 " to="/login" onClick={handleLogout}>Log Out</button>
                        </div>    
                }

                </div>
            </div>
        </nav>
      <Carousel/>
      <div className='container mb-4'>
        {
            ( shoeCate === [] )?
             <h1> NO DATA EXIST </h1>
             :
             shoeCate.map( (categories,idx) => {
                return (<div className='row m-3'>  <h3 key={categories._id} className='text-center m-3 text-success fw-bold'> {categories.CategoryName} </h3> <hr/>
                
                {
                    ( shoes === [] ) ?
                    <div> <h1 className='text-center m-3 text-success fw-bold'> Currently Unavailable </h1></div>
                    :
                    shoes.filter( (shoeItem) => (shoeItem.CategoryName === categories.CategoryName) && (shoeItem.name.toLowerCase().includes(search.toLowerCase())) ).map( (shoe,idx) => {
                        return(<div key={shoe._id} className='col-12 col-md-6 col-lg-3'>
                              <ShoeCard shoeItems = {shoe} shoeSize = {shoe.options[0]}/>
                              </div>)
                    })
                }
                
                </div>)
             })
             
        }
      </div>
      <Footer/>
    </>
  )
}

export default Home;
