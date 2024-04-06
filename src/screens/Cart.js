import React  from 'react';
import { useCart, useDispatchCart } from '../components/ContextReducer.js';



const Cart = () => {

    let data = useCart();
    let dispatch = useDispatchCart();

    let totalPrice = 0

    for(  let i=0; i<data.length; i++ )
    {
        let num = parseInt(data[i].price)
        totalPrice += num;
    }



    if( data.length === 0 )
    {
        return (
            <div className='container'>
              <div className='text-success text-center fw-bolder fs-1 mt-4'>
                Your cart is Empty right now !
              </div>
            </div>
        )
    }

    const handleCheckOut = async() => {
        let userEmail = localStorage.getItem("userEmail");
        let response  = await fetch("http://localhost:5000/order/save" , {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                order_data: data,
                email: userEmail,
                order_date: new Date().toDateString()
            })
        });
        if( response.status === 200 )
        {
            dispatch({ type: "DROP" })
        }
    }




  return (

    
    <div className='container mt-4'>

        <table className="table">
        <thead>
            <tr>
            <th scope="col" className='text-success fw-bolder fs-5'>#</th>
            <th scope="col" className='text-success fw-bolder fs-5'>Product</th>
            <th scope="col" className='text-success fw-bolder fs-5'>Size</th>
            <th scope="col" className='text-success fw-bolder fs-5'>Amount</th>
            </tr>
        </thead>
        <tbody>

            {
                data.map( (shoe,idx) =>{
                    return(
                        <tr>
                            <th scope="row">{idx+1}</th>
                            <td>{shoe.name}</td>
                            <td>{shoe.size}</td>
                            <td>{shoe.price}</td>
                            <td><button type='button' className='btn btn-outline-danger ' alt="delete" onClick={() => { dispatch({ type:"REMOVE", index: idx })}}>x</button></td>
                        </tr>
                    )
                })
            }

        </tbody>
        </table>
        <p className='text-danger fw-bolder fs-4'> Total Price: {totalPrice}</p>
        <div>
            <button className='btn btn-outline-success m-4' onClick={handleCheckOut}>CheckOut</button>
        </div>
    </div>
  )
}

export default Cart;
