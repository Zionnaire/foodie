import vector from '../images/Vector.png'
import React from 'react'

export default function Dashboard(){
    return(
        <>
        <section className="dash-1">
<div className="dash-2">
    <div className="dash-3">
        <div className="dash-cont1">
            <h1>Dashboard</h1>
        </div>
        <div className="hello-cont">
            <h2>Hello Christiana</h2>
            <img src={vector} alt=''/>
        </div>
        <h4>Order you meal from various 
restaurants around Ibadan.</h4>
    </div>
</div>
        </section>
        </>
    )
}