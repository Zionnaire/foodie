import Group from "../images/Group 158.png";
import Ellipse from "../images/Ellipse 5.png";
import Vector from "../images/Vector 1.png";
import food1 from "../images/img1.png";
import food2 from "../images/img2.png";
import food3 from "../images/img3.png";
import food4 from "../images/img4.png"
import food5 from "../images/img5.png"
import food6 from '../images/img6.png'
import chef from "../images/chef.png";
import man from "../images/Ellipse 3.png";
import Footer from "../components/Footer";
import React, { useState } from "react";
import NavBar from '../components/NavBar'
import axios from "axios";
import {ImLocation2} from "react-icons/im"

export default function Home() {
  const [menu, setMenu] = useState([])

  return (
    <div>
      <NavBar />
      <section id="banner">
        <div class="container-fluid" id="banner-container">
          <div class="row" id="banner-row">
            <div class="col-md-6" id="banner-col">
              <h3>Delivering Satisfaction</h3>
              <h4>Every day</h4>
              <img
                class="img-responsive rounded mx-auto d-block"
                id="vector1"
                src={Vector}
                alt=""
              />
              <p>Browse Restaurants Near You</p>
              <div class="mb-3">
                <input
                  type="address"
                  placeholder="Enter address"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <button type="submit" class="btn" id="btn11">
                <ImLocation2/> Use current location
                </button>
              </div>
            </div>
            <div className="col-md-16" id="banner-col1">
              <img
                class="img-responsive rounded mx-auto d-block"
                id="ellipse"
                src={Ellipse}
                alt=""
              />
              <img
                class="img-responsive rounded mx-auto d-block"
                id="banner-col20"
                src={Group}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section id="banner2">
        <div class="container-fluid2" id="banner-container2">
          <div class="row2" id="banner-row2">
              <h3>Popular Restaurants</h3>
          <div className="foods">
          <div className="all-foods">
              <div className="col-md-72" id="banner-col3-2">
                <img
                  class="img-responsive rounded mx-auto d-block"
                  id="food-1"
                  src={food1}
                  alt=""
                />
                <h5>KFC</h5>
                <h6>87% (791)</h6>
              </div>
              <div className="col-md-72" id="banner-col3-2">
                <img
                  class="img-responsive rounded mx-auto d-block"
                  id="food-1"
                  src={food2}
                  alt=""
                />
                <h5>CHICKEN REPUBLIC</h5>
                <h6>87% (791)</h6>
              </div>
              <div className="col-md-72" id="banner-col3-2">
                <img
                  class="img-responsive rounded mx-auto d-block"
                  id="food-1"
                  src={food3}
                  alt=""
                />
                <h5>AMALA SKY</h5>
                <h6>87% (791)</h6>
              </div>
            </div>
            <div className="all-foods">
              <div className="col-md-72" id="banner-col3-2">
                <img
                  class="img-responsive rounded mx-auto d-block"
                  id="food-1"
                  src={food4}
                  alt=""
                />
                <h5>KILIMANJARO</h5>
                <h6>87% (791)</h6>
              </div>
              <div className="col-md-72" id="banner-col3-2">
                <img
                  class="img-responsive rounded mx-auto d-block"
                  id="food-1"
                  src={food5}
                  alt=""
                />
                <h5>OLA MUMMY</h5>
                <h6>87% (791)</h6>
              </div>
              <div className="col-md-72" id="banner-col3-2">
                <img
                  class="img-responsive rounded mx-auto d-block"
                  id="food-1"
                  src={food6}
                  alt=""
                />
                <h5>OFADA SPOT</h5>
                <h6>87% (791)</h6>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section id="banner3">
        <div className="container-fluid3" id="banner-container3">
          <div className="row3" id="banner-row3">

              <h1>Top Category</h1>
            <div className="all-btns" id="all-buttons">
              <div className="first-row-btn">
                <button>Turkey</button>
                <button>Jollof</button>
                <button>Local Food</button>
                <button>Snacks</button>
              </div>
              <div className="first-row-btn">
                <button>Healthy</button>
                <button>Traditional</button>
                <button>Sea Food</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="banner4">
        <div class="container-fluid4" id="banner-container4">
          <div class="row4" id="banner-row4">
            <div class="col-md-64" id="banner-col4">
              <h1>Let’s Join Hands</h1>
              <img
                class="img-responsive rounded mx-auto d-block"
                id="food-1"
                src={chef}
                alt=""
              />

              <h4>
                Join forces with foodie Xpress! You may increase sales and seize
                new chances with the aid of our technology and user base!
              </h4>
              <button id="join">Join us</button> 
            </div>
          </div>
        </div>
      </section>

      <section id="banner5">
        <div class="container-fluid5" id="banner-container5">
          <div class="row5" id="banner-row5">
            <div class="col-md-65" id="banner-col5">
              <h1>Our User Testimonials</h1>
            </div>
            <div className="slides" id="real-slides">
              <div className="slide-1">
                <div className="slide-2">
                  <div className="slide-3">
                    <h5>
                      My experience using Foodie Xpress was easy because every
                      transaction I made was not as difficult as expected at
                      first.
                    </h5>
                    <div className="sect-2">
                      <img
                        class="img-responsive rounded mx-auto d-block"
                        id="food-1"
                        src={man}
                        alt=""
                      />
                      <p>Ogunleye Tosin</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-1">
                <div className="slide-2">
                  <div className="slide-3">
                    <h5>
                      My experience using Foodie Xpress was easy because every
                      transaction I made was not as difficult as expected at
                      first.
                    </h5>
                    <div className="sect-2">
                      <img
                        class="img-responsive rounded mx-auto d-block"
                        id="food-1"
                        src={man}
                        alt=""
                      />
                      <p>Ogunleye Tosin</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-1">
                <div className="slide-2">
                  <div className="slide-3">
                    <h5>
                      My experience using Foodie Xpress was easy because every
                      transaction I made was not as difficult as expected at
                      first.
                    </h5>
                    <div className="sect-2">
                      <img
                        class="img-responsive rounded mx-auto d-block"
                        id="food-1"
                        src={man}
                        alt=""
                      />
                      <p>Ogunleye Tosin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* <Footer/> */}
    </div>
  );
}
