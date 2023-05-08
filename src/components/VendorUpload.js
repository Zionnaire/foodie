import food1 from "../images/food-1.png";
import food2 from "../images/food-2.png";
import food3 from "../images/food-3.png";
import React, { useEffect, useState } from "react";
import { FiPlusSquare } from "react-icons/fi";
import { CartContext } from "../context/cartContext";
import { click } from "@testing-library/user-event/dist/click";
import { FiX } from "react-icons/fi";
import { useContext } from "react";
import axios from "axios";
// import { createLocation } from '@remix-run/router/dist/history'

export default function VendorUpload() {
  const [foodItems, setFoodItems] = useState([]);
  const getAllMenu = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/menu");
      setFoodItems(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllMenu();
  }, []);

  // bring context
  const { cart, setCartLength, setCart } = useContext(CartContext);
  const handleAddToCart = (item) => {
    if (cart.length === 0) {
      item.quantity = 1;
      cart.push(item);
    } else {
      const findItem = cart.findIndex((cartItem) => item.id == cartItem.id);
      if (findItem == -1) {
        item.quantity = 1;
        cart.push(item);
      } else {
        let current = cart[findItem];
        current.quantity = current.quantity + 1;
        current.totalPrice = current.quantity * current.price;
      }
    }
    setCartLength(cart.length);
  };

  const[image, setImage] = useState()
  const [price, setPrice] = useState('')
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  let handleSubmit = async() =>{
    try {
        const formData = new FormData()
        formData.append('image',image)
        formData.append('price',price)
        formData.append('title',title)
        formData.append('desc', desc)
      const res = await axios.post("http://localhost:5000/api/v1/menu",formData);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <section className="res-1">
        <div className="res-2">
          <div className="res-3">
            <h1>Chicken Republic</h1>
              <input className="res-3-img" type="file" placeholder="Upload image" onChange={e =>setImage(e.target.files[0])}/>
              <input className="res-3-text" type="number" placeholder="Input Price Here" onChange={e =>setPrice(e.target.value)}/>
              <input className="res-3-text" type="text" placeholder="Input Title Here" onChange={e =>setTitle(e.target.value)}/>
              <input className="res-3-text" type="text" placeholder="Input Description Here" onChange={e =>setDesc(e.target.value)}/>
              <button className="res-3-btn" onClick={handleSubmit}>Submit</button>
               
            <hr />
            {foodItems.map((food, index) => (
              <div key={index} className="res-4">
                <img className="res-4-img" src={food.image} />
             
                <div className="res-4-cont">
                  <h1>{food.title}</h1>
                  <h2> {food.desc}</h2>
                  <h3>
                    ₦{food.price}{" "}
                    {/* <FiPlusSquare
                      onClick={() => {
                        handleAddToCart(food);
                      }}
                    />{" "} */}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
