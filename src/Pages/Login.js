import React from 'react'
import { useState} from 'react'
import SignupForm from '../Components/SignupForm'
import LoginForm from '../Components/LoginForm'



const Login = (props) => {
    return (
        <div className="Login">
            <div className="split left">
            <SignupForm {...props} />
            </div>
            <div className="split right">
            <LoginForm {...props} />
            </div>
        </div>
    )
}

export default Login
