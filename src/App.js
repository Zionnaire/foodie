import "./App.css";

// import './App.scss'
import React, { useState } from "react";
import Home from "./pages/Homepage";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import Vendor from "./pages/Vendors";
import FullVendor from "./pages/FullVendor";
import Rest from "./pages/Rest";
import Customer from "./pages/Customer";
import Register from "./pages/Restaurants";
import Login from "./pages/Login";
import About from "./pages/About Us";
import Check from "./pages/Check";
import { CartProvider } from "./context/cartContext";
import "./App.css";
import VendorDash from "./pages/VendorDash";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginTrue = () => {
    setIsLoggedIn(true);
  };
  const [cart, setCart] = useState([]);
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About Us" element={<About />} />
            <Route path="/vendors" element={<Vendor />} />
            <Route path="/fullVendors" element={<FullVendor />} />
            <Route path="/vendorDash" element={< VendorDash/>} />
            <Route
              path="/restaurants"
              element={
                <cartProvider>
                  <Rest />
                </cartProvider>
              }
            />
            <Route path="/customer" element={<Customer />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/login"
              element={<Login changeLoginState={loginTrue} />}
            />
            <Route path="/checkout" element={<Check />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>

      <div></div>
    </>
  );
}

export default App;
