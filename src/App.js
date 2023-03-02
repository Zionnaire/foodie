import logo from './logo.svg';
import './App.css';
import React from "react";
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
    </div>
   
  );
}

export default App;
