import Side from "../components/Side";
import Dashboard from "../components/Dash";
import Full from "../components/FullVendors";
import React from "react";


export default function FullVendor(){
    return(
        <div id="vend-gen">
        <Side/>
        <div id="vend-sub">
        <Dashboard/>
        <Full/>
        </div>
        </div>
    )
}