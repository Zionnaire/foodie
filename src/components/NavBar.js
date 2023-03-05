import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Down from './Drop'
// import styles from './NavBar.module.css'
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">
          Foodie Xpress
        </a>
        <button
          class="navbar-toggle"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Start Your Order
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Login
              </a>
            </li>
          </ul>
          <Down />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
