import Side from "../components/Side";
import Dashboard from "../components/Dash";
import React from "react";
import Restaurant from "../components/Restaurant";

export default function Rest(){
    
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