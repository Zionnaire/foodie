import Side from "../components/Side";
import Dashboard from "../components/Dash";
import React from "react";
import Vendors from "../components/Vendors";

export default function Vendor(){
    return(
        <div id="vend-gen">
        <Side/>
        <div id="vend-sub">
        <Dashboard/>
        <Vendors />
        </div>
        </div>
    )
}