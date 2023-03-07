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
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/vendors' element={<Vendor/>}/>
    </Routes>
    </BrowserRouter>
    <div>
        
      </div></>
   
  );
}

export default App;
