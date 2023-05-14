import React, { useState } from "react"
// import { Navbar } from "react-bootstrap"
import NavBar from "../components/NavBar"
import { UsersContext, UsersProvider } from "../context/usersContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


export default function Restaurants(){
    let navigate = useNavigate();
    const[users, setUsers] = useState(UsersContext);
    const[businessName, setBusinessName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('')
    const[location, setLocation] = useState('')
    const[confirm, setConfirm] = useState('')
    const [phone, setPhone] = useState('')
    // const[newUser, setNewUser] = useState(
    //     {            
    //         fullName: name, 
    //         email: email,
    //         location: location,
    //         password: password,
            
    //     }
    // )

    let handleRegister = async()=>{
        let req = {businessname:businessName, email,password, location, phone}
        let response = await axios.post('http://localhost:5000/api/v1/vendors/register', req)
        toast(response.data.message)
        //console.log(response.data)
      }
    
    
    
    
    
    
    
    
    
    // let register=(e) => {
    //     let userExist = users.find(user => user.email == e.email)
    //     if(userExist == 1){
    //         alert("User exist, Please login" )
    //         navigate('/login')
    //     }
    //     else{
    //         if(name !== undefined){
    //             if(password !== undefined){
    //                 if(confirm === password){
                       
    //                           users.push(newUser)
    //                           setUsers(users)
    //                           alert(`Welcome ${(newUser.fullName)}! Kindly login`)
    //                           navigate('/login')         
    //                 }
    //                 else{
    //                     alert('confirm password')
    //                 }
    //             }
    //             else{
    //                 alert('input password please')
    //             }
    //         }
    //         else{
    //             alert('input name please')
    //         }
    //     }
    // }

    return(
        <>
        <UsersProvider>
        <NavBar/>
        <ToastContainer />
        <section className="cust-sect1">
            <div className="cust-sect2">
                <div className="cust-sect3">
                    <h1>Restaurant Account Signup</h1>
                    <h3>Signup for a New Account</h3>
                    <div className="cust-sect4">
                        <input onChange={e =>setBusinessName(e.target.value)} value={businessName} type='text' name="full name" placeholder="Business Name"></input>
                        <input onChange={e =>setEmail(e.target.value)} type='email' value={email} name="email" placeholder="Phone No/Email"></input>
                        <input onChange={e =>setPassword(e.target.value)} type='password' value={password} name="password" placeholder="Password"></input>
                        <input onChange={e =>setConfirm(e.target.value)} type='password' value={confirm} name="confirm password" placeholder="Confirm Password"></input>
                        <input onChange={e =>setLocation(e.target.value)} type='text' value={location} name="phone" placeholder="Location"></input>
                        <button onClick={handleRegister} type="submit">Get Started</button>
                        <div className="disclaim">
                            <p>By clicking this button, you agree to our terms of services and disclaimer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </UsersProvider>
        </>
    )
}