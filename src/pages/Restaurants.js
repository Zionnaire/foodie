import React from "react"
// import { Navbar } from "react-bootstrap"
import NavBar from "../components/NavBar"

export default function Restaurants(){
    return(
        <>
        <NavBar/>
        <section className="cust-sect1">
            <div className="cust-sect2">
                <div className="cust-sect3">
                    <h1>Restaurant Account Signup</h1>
                    <h3>Signup for a New Account</h3>
                    <div className="cust-sect4">
                        <input type='text' name="full name" placeholder="Restaurant Name"></input>
                        <input type='email' name="phone" placeholder="Phone No/Email"></input>
                        <input type='text' name="phone" placeholder="Location"></input>
                        <input type='password' name="password" placeholder="Password"></input>
                        <input type='password' name="confirm password" placeholder="Confirm Password"></input>
                        <button type="">Get Started</button>
                        <div className="disclaim">
                            <p>By clicking this button, you agree to our terms of services and disclaimer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}