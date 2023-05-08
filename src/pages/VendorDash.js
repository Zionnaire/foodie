import Side from "../components/Side";
import Dashboard from "../components/Dash";
import React from "react";
import VendorUpload from "../components/VendorUpload";
import VendDash from "../components/VendDash";

export default function Rest(){
    
    return(
        <div id="vend-gen">
        <Side/>
        <div id="vend-sub">
        <VendDash/>
        <VendorUpload />
        </div>
        </div>
    )
}