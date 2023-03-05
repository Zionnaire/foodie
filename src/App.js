import logo from './logo.svg';
import './App.css';
import React from "react";
import Home from './pages/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/NavBar';
function App() {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
   
  );
}

export default App;
