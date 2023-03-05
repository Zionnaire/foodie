import Group from "../images/Group 158.png";
import Ellipse from "../images/Ellipse 5.png";
import Vector from "../images/Vector 1.png"

export default function Home() {
  return (
    <>
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
                  Use current location
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
    </>
  );
}
