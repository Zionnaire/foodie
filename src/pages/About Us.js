import React from "react";
import Res from "../images/res.jpeg"
import NavBar from "../components/NavBar"
import { Container } from "react-bootstrap";

export default function About() {
  return (
    <>
    <NavBar/>
   
      <section className="about1">
      
        <div className="about2">
          <div className="about3">
          {/* <img src={Res} alt="restaurant img" id="about-img"/> */}

          </div>
        </div>
      </section>
      {/* <Container fluid> */}
      <section className="about21">
      
      <div className="about22">
        <div className="about23">
        <h3>
  Welcome to our restaurant app! We are a team of passionate foodies
  and techies who have come together to create the best restaurant
  experience with our app. Our goal is to connect diners with the
  best restaurants in their area, enabling them to discover new and
  delicious food options. Our app makes it easy to find the perfect
  restaurant for any occasion. Whether you’re looking for a quick
  bite to eat or an evening out with friends, our app can help you
  find the perfect spot. With a few taps, you can browse menus, read
  reviews, and even make reservations. We strive to provide the best
  user experience for our diners. With our app, you can get the
  information you need quickly and easily. We are constantly working
  to improve the app and make sure that it is as user-friendly as
  possible. We believe that everyone should have access to delicious
  and affordable food. That’s why we have partnered with some of the
  best restaurants in town to bring you the best deals and
  discounts. Thank you for choosing our restaurant app. We hope you
  enjoy the experience! Thank you...One more thing, 
</h3>
<h6>Follow us on Social Media: </h6>
<div id="about-ul">
  <h6><a href="https://www.facebook.com/FoodieXpress">Facebook</a></h6>
  <h6><a href= "https://www.instagram.com/FoodieXpress">Instagram</a></h6>
  <h6><a href= "https://twitter.com/FoodieXpress"> Twitter</a> </h6>
</div>

        </div>
      </div>
    </section>

      {/* </Container> */}
    </>
  );
}
