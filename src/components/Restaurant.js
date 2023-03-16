import food1 from '../images/food-1.png'
import food2 from '../images/food-2.png'
import food3 from '../images/food-3.png'
import React from 'react'
import {FiPlusSquare} from 'react-icons/fi'
import { CartContext } from '../context/cartContext'
import { click } from '@testing-library/user-event/dist/click'
import { FiX } from 'react-icons/fi'
import { useContext } from 'react'
// import { createLocation } from '@remix-run/router/dist/history'

export default function Restaurant(){
    let foodItems = [
        {
            id: 1,
            img: '/images/food-3.png',
            title: "EggStar Meal",
            desc: "An Egg served with White Rice, Spaghetti, Fried Rice or Jollof Rice with a delicious sauce.",
            price: 500.00,
    

        },
        {
            id: 2,
            img: '/images/food-1.png',
            title: "Chicken & Chips",
            desc: "Cripsy Fried Chicken and Chips with a cup of Latte.",
            price: 800.00,
            

        },
        {
            id: 3,
            img: '/images/food-2.png',
            title: "Fried Rice & Plantain",
            desc: "Fried Plantain served with White Rice, Spaghetti, Fried Rice or Jollof Rice with a delicious sauce coupled with soft drink.",
            price: 1500.00,
            

        },
        {
            id: 4,
            img: '/images/food-3.png',
            title: "EggStar Meal",
            desc: "An Egg served with White Rice, Spaghetti, Fried Rice or Jollof Rice with a delicious sauce.",
            price: 500.00,
          

        },
        {
            id: 5,
            img: '/images/food-1.png',
            title: "Chicken & Chips",
            desc: "Cripsy Fried Chicken and Chips with a cup of Latte.",
            price: 800.00,
            

        },
        {
            id: 6,
            img: '/images/food-2.png',
            title: "Fried Rice & Plantain",
            desc: "Fried Plantain served with White Rice, Spaghetti, Fried Rice or Jollof Rice with a delicious sauce coupled with soft drink.",
            price: 1500.00,
          

        }
    ]
    // bring context
    const {cart, setCartLength, setCart} = useContext(CartContext)
    const handleAddToCart = (item) => {
        console.log(cart)
       
        if(cart.length === 0){
            item.quantity= 1
            //setCart([...cart,item])
            cart.push(item)
        }
        else{

            console.log(cart);
            const findItem = cart.findIndex(cartItem=>(
                item.id == cartItem.id
            ))
            if(findItem == -1){
                item.quantity = 1
                cart.push(item)
            }
            else{
                let current = cart[findItem]
                current.quantity = current.quantity +1
                
            }
            
        }
        
        //cart.push(item)
    
        // setCart(item)
         setCartLength(cart.length)
       
      };

    return(
        <>
       <section className='res-1'>
        <div className='res-2'>
        <div className='res-3'>
            <h1>Chicken Republic</h1>
            <hr/>
            {foodItems.map(food=>(
                <div className='res-4'>
                  
                    <img src={`${process.env.PUBLIC_URL + food.img}`}/>
                    <div className='res-4-cont'>
                    <h1>{food.title}</h1>
                   <h2> {food.desc}</h2>
                    <h3>₦{food.price} <FiPlusSquare  onClick={()=>{handleAddToCart(food)}}/> </h3>
                    

                    </div>    
                </div>
                
            ))}
            
        </div>
        </div>
       </section>
        </>
    )
}