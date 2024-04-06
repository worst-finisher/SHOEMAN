import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext();
const CartDispatchContext  = createContext();

const reducer = ( state, action ) => {
    switch(action.type)
    {
        case "ADD":
            return [...state, {id: action.id, name: action.name, size: action.size, price: action.price, img: action.img}];
        
        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr
        
        case "DROP":
            let emptyArr = []
            return emptyArr 
           
        default:
                console.log("Error In Action");
    }
}

export const CartProvider = ({children})=>{

    const [ state, dispatch ] = useReducer( reducer, [] );
    return(
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>

    )
}

export const useCart = ()=> useContext(CartStateContext);
export const useDispatchCart = ()=> useContext(CartDispatchContext);
