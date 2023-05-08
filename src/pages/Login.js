import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

    let handleLogin = async()=>{
      let req = {
        email:email,
        password:password
      }
      let response = await axios.post('http://localhost:5000/login', req)
      toast(response.data.message)
      //console.log(response.data)
    }

    let handleSubmit = () => {
        let userExist = users.findIndex(user => user.email === email)
        if(userExist == -1){
            alert("User does not exist, Please SignUp" )
            navigate('/customer')

        }
        else{
            if(users[userExist].password === password){
                props.changeLoginState()
                navigate("/vendors")
            }
            else{
                alert("Wrong Password! Kindly check and try again")
            }
        }
    }
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
