import React, { useState } from "react"
// import { Navbar } from "react-bootstrap"
import NavBar from "../components/NavBar"
import { UsersContext, UsersProvider } from "../context/usersContext";
import { useNavigate } from "react-router-dom";


export default function Restaurants(){
    let navigate = useNavigate();
    const[users, setUsers] = useState(UsersContext);
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('')
    const[location, setLocation] = useState('')
    const[confirm, setConfirm] = useState('')
    const[newUser, setNewUser] = useState(
        {            
            fullName: name, 
            email: email,
            location: location,
            password: password,
            
        }
    )

    let handleRegister = (e) => {
        let userExist = users.find(user => user.email == e.email)
        if(userExist == 1){
            alert("User exist, Please login" )
            navigate('/login')
        }
        else{
            if(name !== undefined){
                if(password !== undefined){
                    if(confirm === password){
                       
                              users.push(newUser)
                              setUsers(users)
                              alert(`Welcome ${(newUser.fullName)}! Kindly login`)
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
        <UsersProvider>
        <NavBar/>
        <section className="cust-sect1">
            <div className="cust-sect2">
                <div className="cust-sect3">
                    <h1>Restaurant Account Signup</h1>
                    <h3>Signup for a New Account</h3>
                    <div className="cust-sect4">
                        <input onChange={e =>setName(e.target.value)} type='text' name="full name" placeholder="Restaurant Name"></input>
                        <input onChange={e =>setEmail(e.target.value)} type='email' name="email" placeholder="Phone No/Email"></input>
                        <input onChange={e =>setLocation(e.target.value)} type='text' name="phone" placeholder="Location"></input>
                        <input onChange={e =>setPassword(e.target.value)} type='password' name="password" placeholder="Password"></input>
                        <input onChange={e =>setConfirm(e.target.value)} type='password' name="confirm password" placeholder="Confirm Password"></input>
                        <button onClick={handleRegister} type="">Get Started</button>
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