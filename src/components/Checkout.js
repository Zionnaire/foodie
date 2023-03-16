import React, { useState } from "react"
import { icons } from "react-icons"
import map1 from '../images/map.png'
import {RiMenu3Line} from 'react-icons/ri'
import {AiFillHome} from 'react-icons/ai'
import {HiBuildingOffice} from 'react-icons/hi2'
import {FaCcMastercard} from 'react-icons/fa'
import {MdOutlineSmartphone} from 'react-icons/md'
import {IoMdCash} from 'react-icons/io'
import { Container } from "react-bootstrap"
import { CartContext } from "../context/cartContext"


export default function Checkout(){
    const [subTotal, setSubTotal] = useState(0.00)
    return(
        
        // <Container className="container container-xl container-xxl">
        <section className="check-1">
            <div className="check-2">
                <div className="check-3">
                    <h1>Contact Details</h1>
                    <hr/>
                    <div className="name-cont">
                        <h4>Full name</h4>
                        <h4>John Doe</h4>
                    </div>
                    <div className="name-cont">
                        <h4>Email</h4>
                        <h4>johndoe@gmail.com</h4>
                    </div>
                    <div className="name-cont">
                        <h4>Mobile</h4>
                        <h4>+23408135674873</h4>
                    </div>
                    <hr/>
                    <h1>Delivery Address</h1>
                    <hr/>
                    <div className="delivery">
                        <div className="deli-2">
                        <div className="address">
                            <h6>Street Address</h6>
                            <input type="text"/>
                        </div>
                        <div className="address">
                            <h6>House No</h6>
                            <input type="text"/>
                        </div>
                        <div id="label">
                            <h5>Add label</h5>
                           <div id="label-btn">
                           <button><AiFillHome/>Home</button>
                            <button><HiBuildingOffice/>Office</button>
                            <button><RiMenu3Line/>Other</button>
                           </div>
                        </div>
                        </div>
                        <img src={map1}/>
                    </div>
                    <hr/>
                    <h1>Payment Method</h1>
                    <hr/>
                    <div className="pay">
                       <div className="pay-1">
                       <h5>Pay now</h5>
                        <input placeholder="Pay with One Click - Master Card, Visa and Verve"/>
                        <div className="icon-radio">
                        <input type='radio' id="radio"/>
                        <div><FaCcMastercard/></div>
                        </div>
                       </div>
                       <div className="pay-1">
                        <input placeholder="Pay with Bank Transfer or USSD"/>
                        <div className="icon-radio">
                        <input type='radio' id="radio"/>
                        <div><AiFillHome/></div>
                        <div><MdOutlineSmartphone/></div>
                        </div>
                       </div>
                       <div className="pay-1">
                       <h5>Pay now</h5>
                        <input placeholder="Pay on Delivery"/>
                        <div className="icon-radio">
                        <input type='radio' id="radio"/>
                        <div><IoMdCash/></div>
                        </div>
                       </div>
                       <hr/>
                    </div>
                   
                    <div className="total-cont">
                    <div className="total-cont-1">
                    <div id="sub">
                            <h5>Subtotal</h5>
                            <h5>₦2,300.00</h5>
                        </div>
                        <div id="sub">
                            <h5>Delivery Fee</h5>
                            <h5>₦450.00</h5>
                        </div>
                        <div id="sub">
                            <h5>Including VAT</h5>
                            <h5>₦171.63</h5>
                        </div>
                        <div id="sub">
                            <h5>Total</h5>
                            <h5>₦3,100.63</h5>
                        </div>
                    </div>
                    </div>
                </div>
                <button>PLACE ORDER NOW</button>
            </div>
        </section>
        // </Container>
        
    )
}