
import React, {useState} from "react"
import NavBar from "../components/NavBar"
import { BrowserRouter as Router, Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useState } from "react"

let users = [
    {
        fullName: "Desmond Sever",
        email: "meyan200@gmail.com",
        password: "Desmond200@",
       
    },
    {
        fullName: "Raymond Steve",
        email: "rennan200@gmail.com",
        password: "Raymond200@",
       
    },
    {
        fullName: "Raynod clever",
        email: "reynan200@gmail.com",
        password: "Raynan200@",
       
    },

];
export default function Customer(){

    let navigate = useNavigate();
    const[name, setName] = useState("");
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("");
    const[confirm, setConfirm] = useState('')
    // const{newUser, setNewUser} = useState({});
    let registerUser =async() =>{
        let firstName = name.split(" ")[0]
        let lastName = name.split(" ")[1]
        let request = {
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
            cPassword: confirm
        }
        let response = await axios.post('http://localhost:5000/register',request)
        console.log(response)
    }
    let handleRegister = (e) => {
        let userExist = users.findIndex(user => user.email === email)
        if(userExist == 1){
            alert("User exist, Please login" )
            navigate('/login')
        }
        else{
            if(name !== undefined){
                if(password !== undefined){
                    if(confirm === password){
                       let newUser = {
                    
                                 fullName: setName(name),                                email: e.target.value,
                                 password: setPassword(password),
                                 email: setEmail(email)
                              }
                              users.push(newUser)
                              alert(`Welcome ${newUser.fullName}! Kindly login`)
                              navigate('/login')         
                    }
                    else{
                        alert('confirm password')
                    }
                }
                else{
                    alert('input password please')
                }
            }
            else{
                alert('input name please')
            }
        }
    }

    return(
        <>
        <NavBar/>
        <section className="cust-sect1">
            <div className="cust-sect2">
                <div className="cust-sect3">
                    <h1>Customer Account Signup</h1>
                    <h3>Signup for a New Account</h3>
                    <h3>Are you a Restaurant? <Link to={'/register'}> Signup here</Link></h3>

                    <div className="cust-sect4">
                        <input type='text' name="full name" placeholder="Full Name" onChange={e =>setName(e.target.value)}></input>
                        <input type='email' name="phone" placeholder="Phone No/Email" onChange={e =>setEmail(e.target.value)}></input>
                        <input type='password' name="password" placeholder="Password" onChange={e =>setPassword(e.target.value)}></input>
                        <input type='password' name="confirm password" placeholder="Confirm Password" onChange={e =>setConfirm(e.target.value)}></input>
                        <button type="" onClick={registerUser}>Get Started</button>
                        <div className="disclaim">
                            <p>By clicking this button, you agree to our terms of services and disclaimer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}