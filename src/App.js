import './App.css';

// import './App.scss'
import React, { useState } from "react";
import Home from './pages/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";

import Vendor from './pages/Vendors';
import FullVendor from './pages/FullVendor';
import Rest from './pages/Rest';
import Customer from './pages/Customer';
import Restaurants from './pages/Restaurants';
import Login from './pages/Login';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const loginTrue = () => {
    setIsLoggedIn(true);
  }
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/vendors' element={<Vendor/>}/>
      <Route path='/fullVendors' element={<FullVendor/>}/>
      <Route path='/restaurants' element={<Rest/>}/>
      <Route path='/customer' element={<Customer/>}/>
      <Route path='/restaurant' element={<Restaurants/>}/>
      <Route path='/login' element={<Login changeLoginState={loginTrue}/>}/>
    </Routes>
    </BrowserRouter>
    <div>
        
      </div></>
   
  );
}

export default App;
