import vector from "../images/Vector.png";
// import React, { useContext } from "react";
import { FaShoppingCart , FaRegMinusSquare} from "react-icons/fa";
import {AiOutlinePlusSquare} from "react-icons/ai"
import { BsFillEnvelopeCheckFill } from "react-icons/bs";
import { MdAddAlert, MdOutlineCancelPresentation } from "react-icons/md";
import React, { useState, useContext, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { click } from "@testing-library/user-event/dist/click";
import { CartContext } from "../context/cartContext";

export default function VendDash() {
  // const context = useContext(CartContext)  
  const {cart, cartLength} = useContext(CartContext)
  //const [total,setTotal] = useState(0)
  // console.log(cart);
  
  

  const [show, setShow] = useState(false);

  // console.log({cart})

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [location, setLocation] = useState('')
  // const[itemExist, setItemExist] = useState([])

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

//  const DeleteButton = (props) => {
  const [isDelete, setIsDelete] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);
  const [increaseItem, setIncreaseItem] = useState(false)

  const handleDelete = () => {
    let index = cart.findIndex(item =>item.id === item)
           cart.splice(index,1)
           let cartItem = cart[index] // Get the cart item with the particular delete button
            // let entireItem = cart[cartItem] // Get the item  list
            setIsDelete(cartItem)
    setIsDelete(true);
    if (isDelete) {
      setIsDelete(false)
      return <span>Deleted...</span>;
    }
  };

  const handleDeleteItem = (food) => {
    // console.log(index);
    let index = cart.findIndex(item =>item === food)
    // console.log(cart[index]);
    let itemChange = cart[index]
    let currentQ = itemChange.quantity -= 1 
    itemChange.totalPrice = itemChange.price * currentQ
    setDeleteItem(itemChange)
    setDeleteItem(true)
    if(deleteItem){
      setDeleteItem(false)
    }
    // setDeleteItem(false)
  }

  const handleIncreaseItem = (food) => {
    // console.log(index);
    let index = cart.findIndex(item =>item.id === food.id)
    // console.log(cart[index]);
    let itemChange = cart[index]
    let currentQ = itemChange.quantity += 1 
    itemChange.totalPrice = itemChange.price * currentQ
    cart[index] = itemChange
    //setIncreaseItem(itemChange)
    setIncreaseItem(true)
    if(increaseItem){
      setIncreaseItem(false)
    }
    // setDeleteItem(false)
  }
  
  
  return (
    <>
      <section className="dash-1">
        <div className="dash-2">
          <div className="dash-3">
            <div className="dash-cont1">
              <h1>Dashboard</h1>
              <div className="dash-icon">
                {/* <div id="cart">
                  {click ? (
                    <FaShoppingCart onClick={handleShow} />
                  ) : (
                    <FaShoppingCart onClick={handleClose} />
                  )}
                  ({cartLength})
                </div> */}
                <div id="cart">
                  <BsFillEnvelopeCheckFill />
                </div>
                <div id="cart">
                  <MdAddAlert />
                </div>
              </div>
            </div>
            <div className="hello-cont">
              <h2>Hello Christiana</h2>
              <img src={vector} alt="" />
            </div>
            <h4>Kindly Upload Your Menu Here.</h4>
          </div>
        </div>
      </section>
    </>
  );
}
