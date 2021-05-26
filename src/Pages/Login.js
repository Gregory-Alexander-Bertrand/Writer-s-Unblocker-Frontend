import React from 'react'
import { useState} from 'react'
import SignupForm from '../Components/SignupForm'
import LoginForm from '../Components/LoginForm'



const Login = (props) => {
    const [user, setUser] = useState({})
    return (
        <div className="Login">
            <SignupForm {...props} setUser={setUser}/>
            <LoginForm {...props} setUser={setUser} />
        </div>
    )
}

export default Login
