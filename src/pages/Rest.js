import Side from "../components/Side";
import Dashboard from "../components/Dash";
import React from "react";
import Vendors from "../components/Vendors";
import Restaurants from "../components/Restaurant";

export default function Rest(){
    return(
        <div id="vend-gen">
        <Side/>
        <div id="vend-sub">
        <Dashboard/>
        <Restaurants />
        </div>
        </div>
    )
}