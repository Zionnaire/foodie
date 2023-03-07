import './App.css';

// import './App.scss'
import React from "react";
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
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/vendors' element={<Vendor/>}/>
      <Route path='/fullVendors' element={<FullVendor/>}/>
      <Route path='/restaurants' element={<Rest/>}/>
    </Routes>
    </BrowserRouter>
    <div>
        
      </div></>
   
  );
}

export default App;
