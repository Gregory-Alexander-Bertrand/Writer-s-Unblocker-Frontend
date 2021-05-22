import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const LoginForm = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
            email, password
        }).then((response) => {
            console.log(response)
            props.setUser(response.data.user)
            localStorage.setItem('userId', response.data.userId)
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password"  value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default LoginForm
