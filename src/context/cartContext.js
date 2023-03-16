import React, {createContext, useState} from 'react';


/*Here we're creating a Context for our cart with default values of an empty cart and an empty function for updating a cart.
we'll replace these defaults when we initialise the context's provider.*/ 
const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    const [cartLength, setCartLength]= useState(cart.length)
    // console.log(cart)
    // console.log(cartLength)
    return(
        <CartContext.Provider value={{
            cart, cartLength, setCart, setCartLength
        }}>
            {children}
        </CartContext.Provider>
    )
}
export {CartProvider, CartContext}