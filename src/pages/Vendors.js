import Side from "../components/Side";
import Dashboard from "../components/Dash";
import React, { useContext } from "react";
import Vendors from "../components/Vendors";
import { CartContext } from "../context/cartContext";

export default function Vendor(){
    const {cart, cartLength} = useContext(CartContext)
    return(
        <div id="vend-gen">
        <Side/>
        <div id="vend-sub">
        <Dashboard cart={cart} cartLength={cartLength}/>
        <Vendors />
        </div>
        </div>
    )
}