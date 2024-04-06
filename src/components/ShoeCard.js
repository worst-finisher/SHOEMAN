import React, { useState, useRef, useEffect } from 'react'
import { useCart, useDispatchCart } from './ContextReducer.js';

const ShoeCard = (props) => {

    let size = props.shoeSize;
    let sizeOptions = Object.keys(size);

    const priceRef = useRef();

    const [ sizes, setSizes ] = useState("");
    let dispatch = useDispatchCart();
    let data = useCart();

    const handleAddCart = async ()=> {
          await dispatch({ type:"ADD", id: props.shoeItems._id, name: props.shoeItems.name, price: size[sizes], size: sizes, img: props.shoeItems.img });
          console.log(data)
          setLoading(true);
          setTimeout(() => setLoading(false) , 1000);
        //   setLoading(false);
        //   window.alert("Added to Cart")
    }

    const [loading, setLoading] = useState(false);

    useEffect( () => {
        setSizes(priceRef.current.value);
    },[]);

  return (
    <div className="card mt-3" style={{ "height":"570px" }} >
     <img src={props.shoeItems.img} className="card-img-top" alt="..." style={{"height":"320px", objectFit: "fill"}}/>
            <div className="card-body">
                <h5 className="card-title">{props.shoeItems.name}</h5>
                <p className="card-text">{props.shoeItems.description}</p>
                
                <div className="container w-100 d-flex">
                    <p className='text-success fw-bold'> SIZE: </p>
                    <select className="ms-2 h-100 w-50 bg-success rounded" ref={priceRef} onChange={(e)=>{ setSizes(e.target.value) } }>
                        {
                            sizeOptions.map((data) => {
                               return( <option key={data} value={data}>{data}</option> )
                            })
                        } 
                    </select>
                    <p className='text-success fw-bold ms-4'> PRICE: </p>
                    <p className="card-text ms-2 text-danger">  &#x20b9;{size[sizes]}</p>
                </div>
            </div>
        <hr/>
        
        <button className=" btn btn-success mx-2 mb-3 w-50 text-white" onClick={handleAddCart} >Add to Cart</button>
        <div >
        {
            (loading)?
             <div className='text-center text-info fw-bold fst-italic mb-2'><i className="fa fa-check"></i
             >{"  "}Item Added to Cart </div>
             : ""
        }
        </div>
   </div>
  )
}

export default ShoeCard;
