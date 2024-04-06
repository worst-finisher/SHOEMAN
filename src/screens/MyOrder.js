import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';
import { useNavigate } from 'react-router-dom';

export default function MyOrder() {

    const [orderData, setorderData] = useState({})
    const navigate = useNavigate();

    const handleGoBack = ()=> {
        navigate('/')
    }

    let isEmpty = false;

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:5000/order/user", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            setorderData(response)
        })



        // await res.map((data)=>{
        //    console.log(data)
        // })


    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    const STYLES = {
        position: "absolute",
        display: "block",
        alignItems: "center",
        right: "0",
        bottom: "0",
        left: "0"
    }

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className='container-fluid'>
                <div className='container'>

                    {orderData !== {} ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div className='row'>
                                                    {arrayData.Order_date ? <div className='m-auto mt-5'>

                                                        {data = arrayData.Order_date}
                                                        <hr />
                                                    </div> :
 
                                                       <div>
                                                        <div className='col-12 col-md-6 col-lg-3' >
                                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "660px" }}>
                                                                <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "250px", objectFit: "fill" }} />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                        <span className='m-1'>{arrayData.size}</span>
                                                                        <span className='m-1'>{data}</span>
                                                                        <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                            ₹{arrayData.price}/-
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                         </div>
                                                        </div>



                                                    }

                                                </div>
                                            )
                                        })

                                    )
                                }) : <>  { isEmpty = true } <div className='text-center text-success fs-4 mt-4'> You don't had placed order till now !</div> <div className='mt-3'><button className='btn btn-outline-success' style={{marginLeft:"45%"}} onClick={handleGoBack}>Go Back </button></div> </> 
                        )
                    }) :""
                    }
                </div>


            </div>

            <div style={(isEmpty)? STYLES : {} }>
            <Footer />
            </div>
            
        </div>
    )
}