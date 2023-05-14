import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route, Link, Navigate} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Customer from "./Customer";

let users = [
    {
        fullName: "Desmond Sever",
        phone: "+2399098978677",
        email: "meyan200@gmail.com",
        password: "Desmond200@",
       
    },
    {
        fullName: "Raymond Steve",
        phone: "+2347098978677",
        email: "rennan200@gmail.com",
        password: "Raymond200@",
       
    },
    {
        fullName: "Raynod clever",
        phone: "+234548978677",
        email: "reynan200@gmail.com",
        password: "Raynan200@",
       
    },

];

export default function Login(props) {
    let navigate = useNavigate();
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [userType, setUserType] = useState('')

    let handleLogin = async()=>{
      let req = {
        email:email,
        password:password,
        role: userType
      }
      console.log(req)
      let response = await axios.post('http://localhost:5000/api/v1/users/login', req)
      toast(response.data.message)
      navigate("/vendors")
      //console.log(response.data)
    }

    // let handleSubmit = () => {
    //     let userExist = users.findIndex(user => user.email === email)
    //     if(userExist == -1){
    //         alert("User does not exist, Please SignUp" )
    //         navigate('/customer')

    //     }
    //     else{
    //         if(users[userExist].password === password){
    //             props.changeLoginState()
    //             navigate("/vendors")
    //         }
    //         else{
    //             alert("Wrong Password! Kindly check and try again")
    //         }
    //     }
    // }
  return (
    <>
    <NavBar/>
    <ToastContainer />
      <section className="cust-sect1">
        <div className="cust-sect2">
          <div className="cust-sect3">
            <h1>Hello! Login</h1>
            <div className="cust-sect4">
              <input
                type="text"
                name="email"
                value={email}
                onChange={e=>setEmail(e.target.value)} 
                placeholder="Phone No/Email"
              ></input>

              <input
                type="password"
                name="password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                placeholder="Password"
              ></input>
              <select value={userType } onChange={e=>setUserType(e.target.value)} className="select-option">
              <option className="options" value="Customer">Customer</option>
              <option className="options" value="Vendor">Vendor</option>
              </select> 



              <button onClick={handleLogin} type="">Login</button>
              <div className="disclaim">
              <p>
                Not a customer?  <Link to= {'/customer'}>Click here to Register</Link> 
                </p>
                <p>
                Forgot Password?  Click here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
