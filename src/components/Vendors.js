import food1 from "../images/img1.png";
import food2 from "../images/img2.png";
import food3 from "../images/img3.png";
import food4 from "../images/img4.png"
import food5 from "../images/img5.png"
import food6 from '../images/img6.png'
import React from "react";


export default function Vendors(){
  
    return(
        <>
        <section className="vend-sec1">
        <div className="vend-sec2">
            <div className="vend-sec3">
                <h2>Vendors</h2>
                <hr/>
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
            <div className="vend-btn">
            <button>See more</button>
          </div>
          </div>
          
            </div>
        </div>
        </section>
        </>
    )
}