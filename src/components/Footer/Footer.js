// import "~bootstrap/scss/bootstrap";
// import "./App.scss";
// import "bootstrap/dist/css/bootstrap.min.scss";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <span class="footer-title">Let’s Join Hands</span>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Careers
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Foodie Xpress Partners
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Couriers
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <span class="footer-title">Links</span>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    FAQs
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <span class="footer-title">Social Media</span>
                </li>
                <li class="nav-item">
                  <span class="nav-link">
                    {" "}
                    <i class="fab fa-facebook-f"></i>Facebook
                  </span>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    {" "}
                    <i class="fab fa-instagram"></i>Instagram
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fab fa-twitter"></i>Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 box">
              <ul class="list-inline quick-links">
                <li class="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
                <li class="list-inline-item">
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="text-center">
            <i class="fas fa-ellipsis-h"></i>
          </div>

          <div class="row text-center">
            <div class="col-md-4 box">
              <span class="copyright quick-links">
                Copyright &copy; FoodieXpress{" "}
                <script>document.write(new Date().getFullYear())</script>
              </span>
            </div>
            <div class="col-md-4 box">
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
