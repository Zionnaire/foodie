import vector from "../images/Vector.png";
// import React, { useContext } from "react";
import { FaShoppingCart , FaRegMinusSquare} from "react-icons/fa";
import {AiOutlinePlusSquare} from "react-icons/ai"
import { BsFillEnvelopeCheckFill } from "react-icons/bs";
import { MdAddAlert, MdFoodBank, MdOutlineCancelPresentation } from "react-icons/md";
import React, { useState, useContext, Component, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { click } from "@testing-library/user-event/dist/click";
import { CartContext } from "../context/cartContext";

export default function Dashboard() {
  // const context = useContext(CartContext)  
  const {cart, cartLength, setCart} = useContext(CartContext)
  //const [total,setTotal] = useState(0)
  console.log(cart);
  
  

  const [show, setShow] = useState(false);

  // console.log({cart})

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [location, setLocation] = useState('')
  const[itemExist, setItemExist] = useState([])

  let total = 0;
  let charges= 0;
  let calculateTotal =() =>{
    cart.forEach(item=>{
    total = total + (item.price * item.quantity)
    //setTotal(total)
  })}
   calculateTotal()
  
  let delivery = 1/10 * total;
  let discount = 0.05 * total;
  let containerCharge = () =>{
    cart.forEach(item => {
      charges = charges + (item.quantity * 200)
    })
  }
  containerCharge()
  let VAT = 6/100 * total;
  let allTotal = total + delivery + charges + VAT - discount; 

  
    const [location, setLocation] = useState(null);
    useEffect(() =>{
      getLocation()
      })

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        });
      }
 }
  
 
  
    // return (
    //   <div>
    //     <button onClick={getLocation}>Find My Location</button>
    //     {location && (
    //       <p>
    //         Latitude: {location.lat} <br />
    //         Longitude: {location.lng}
    //       </p>
    //     )}
    //   </div>
    // );
  
// const getLocation = LocationFinder()
  
  return (
    <>
      <section className="dash-1">
        <div className="dash-2">
          <div className="dash-3">
            <div className="dash-cont1">
              <h1>Dashboard</h1>
              <div className="dash-icon">
                <div id="cart">
                  {click ? (
                    <FaShoppingCart onClick={handleShow} />
                  ) : (
                    <FaShoppingCart onClick={handleClose} />
                  )}
                  ({cartLength})
                </div>
                <div id="cart">
                  <BsFillEnvelopeCheckFill />
                </div>
                <div id="cart">
                  <MdAddAlert />
                </div>
              </div>
            </div>
            <Modal
              show={show}
              onHide={handleClose}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton width="100%">
                <Modal.Title>Location</Modal.Title>
              </Modal.Header>
              <Modal.Body>
               <section className="mod-1">
                <div className="mod-2">
                  <div className="mod-3">
                  <input
                value=''
                  onChange={location}
                  type="text"
                  placeholder="E.g Ajibade Bustop, Mokola, Ibadan, Oyo State"
                />
                  <button onClick={getLocation}>Find My Location</button>
                <p>{location}</p>
                <h5>ESTIMATED DELIVERY TIME</h5>
                <p>{location}</p>
                <hr/>
                <div className="mod-4">
                {(cart.length != 0)?cart.map(food => (
                  <>
                
                  <div className="mod-4-1">
                    <h5>{food.title}</h5>
                    <h5>₦{food.price}</h5>
                  </div>
                  <div className="mod-4-2">
                      <h5><MdOutlineCancelPresentation /> REMOVE</h5>
                      <h5><FaRegMinusSquare /> {food.quantity} <AiOutlinePlusSquare /></h5>
                    </div>
                    </>
                )): <div>Cart is empty</div>} 
                </div>
  
                <hr/>
                    <div >
                      <>
                      {/* {let delivery = 1/10 * total} */}
                    <div className="sub">
                      
                      <h5>Subtotal</h5>
                      <h5>₦{total}</h5>
                    </div>
                    <div className="sub">
                      <h5>Delivery Fee</h5>
                      <h5>₦{delivery}</h5>
                    </div>
                    <div className="sub">
                      <h5>Discount</h5>
                      <h5>₦{discount}</h5>
                    </div>
                    <div className="sub">
                      <h5>Container Charges</h5>
                      <h5>₦{charges}</h5>
                    </div>
                    <div className="sub">
                      <h5>Including VAT</h5>
                      <h5>₦{VAT}</h5>
                    </div>
                    <div className="sub">
                      <h5>Total</h5>
                      <h5>₦{allTotal}</h5>
                    </div>
                    </>
                    </div>
                  </div>
                </div>
               </section>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                PROCEED TO CHECKOUT
                </Button>
              </Modal.Footer>
            </Modal>
            <div className="hello-cont">
              <h2>Hello Christiana</h2>
              <img src={vector} alt="" />
            </div>
            <h4>Order you meal from various restaurants around Ibadan.</h4>
          </div>
        </div>
      </section>
    </>
  );
}
