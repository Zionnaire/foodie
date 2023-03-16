import Side from "../components/Side";
import Dashboard from "../components/Dash";
import React from "react";
// import Vendors from "../components/Vendors";
import Restaurant from "../components/Restaurant";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";

export default function Rest(){
    // let cartDetails = useContext(CartContext)
    //  const {cart, cartLength, setCartLength} = useContext(CartContext)
    //   //  cart = cartDetails.cart
      // cartLength = cartDetails.cartLength
    return(
        <div id="vend-gen">
        <Side/>
        <div id="vend-sub">
        <Dashboard/>
        <Restaurant />
        </div>
        </div>
    )
}