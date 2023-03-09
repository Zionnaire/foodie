import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Down from "./Drop";
// import Login from "../pages/Login";
// import styles from './NavBar.module.css'
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar w-100" variant="dark">
        {/* <nav class="navbar navbar-expand-lg"> */}
        <Link to={"/"}>
          <a class="navbar-brand">Foodie Xpress</a>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
        <Link className="nav-link" href="#features">
              {" "}
              About Us
            </Link>
            <Link className="nav-link" to="/"> Contact Us</Link>
            <Link className="nav-link" to="/vendors"> Start Your Order</Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </Nav>
          <Nav>
            <Down />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
