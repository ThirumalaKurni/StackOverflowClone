import React from "react";
import './Auth.css'
import {useState} from 'react'
import icon from '../../assets/icon.png'
import AboutAuth from "./AboutAuth";
import {signup , login } from '../../actions/auth'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";




const Auth = () => {

    const[isSignup,setIsSignup] = useState(false)
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSwitch = () => {

        setIsSignup( !isSignup )
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!email && !password ){
            alert("Enter a Email and Password to continue")
        }
        if(isSignup){
            if(!name){
                alert("Enter a name to continue")
            }
            dispatch(signup({name , email , password},navigate))
        }
        else{
            dispatch(login({email , password}, navigate))
        }
    }


    return(
        <section className="auth-section">
            { isSignup && <AboutAuth />}
            <div className="auth-container-2">
                { !isSignup && <img src={icon} alt = 'Logo' className = "login-logo" ></img>}
                <form onSubmit={handleSubmit}>

                    { isSignup && (
                        <label htmlFor="name">
                            <h4>Username</h4>
                            <input type="text" name="name" id="name" onChange = {(e) => {setName(e.target.value)}} />
                        </label>
                    )}
                    <label>

                    <h4>Email:</h4>
                    <input type="email" name="email" id="email" onChange = {(e) => {setEmail(e.target.value)}}/>
                    </label>
                    <label htmlFor="password">
                        <div style={{display:"flex" , justifyContent:"space-between"}}>
                        <h4>Password:</h4>
                        { !isSignup && <h4 style={{color: "#007ac6" , fontSize:'13px'}}>Forgot password?</h4> }

                        </div>
                        <input type="password" name="password" id="password" onChange = {(e) => {setPassword(e.target.value)}}/>
                        { isSignup && <p>
                            Password must contain at least <br />eight characters, including <br /> atleast 1 letter and 1 number 
                            </p>
                        }

                    </label>
                    { isSignup && (
                        <label htmlFor="check">
                            <input type="checkbox" id="check" style = {{ width : 20}} />
                            <p style={{ fontSize:"13px"}}> Opt-in to recieve occasional <br /> product updates,user research invitations,<br /> company announcements, and digests. </p>


                        </label>
                    )}
                    <button type="submit" className="auth-btn" >{ isSignup ? 'Sign up': 'Log in' }</button>
                    { isSignup && <p style={{ color: "#666767", fontSize:"13px"}}>By clicking "Signup" , you agree to our 
                        <span  style={{color: "#007ac6"}}>cookie policy </span>
                        <span style={{color: "#007ac6"}}>terms of <br /> service</span>,and 
                        <span style={{color: "#007ac6"}}> privacy policy </span></p>}
                        {
                            !isSignup && (
                                <div>
                                <p style = {{ alignContent: "center" , paddingLeft : "110px"}}> ----or---- </p>
                                <Link to = '/otpLogin'>
                                <button type="button" className="auth-btn-1">Login with OTP</button>
                                </Link>
                                
                                </div>
                            )
                        }
                </form>
                <p> { isSignup ? 'Already have an account ?' : "Don`t have an account ? "}
                <button type='button' className='handle-switch-btn' onClick = {handleSwitch}>{ isSignup ? "Log in" : "Sign up " }</button>
                </p>

            </div>

            
        </section>
    )
}

export default Auth;