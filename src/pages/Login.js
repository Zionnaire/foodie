import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

              <button onClick={handleSubmit} type="">Login</button>
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
