import React from 'react'
import { useState } from 'react'
import { TextField, Box, Button } from '@material-ui/core'
import axios from 'axios'

const LoginForm = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
   

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
            email, password
        }).then((response) => {
            console.log(response.data.user)
            props.setUser(response.data.user)
            localStorage.setItem('userId', response.data.user.id)
        })
        .catch((err) => {
            setError(err.response.data.message)
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <TextField id="standard-basic" label="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <Box m={.6} />
                <TextField id="standard-basic" label="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <Box m={.6} />
                <Button type='submit'>Login</Button>
            </form>
        </div>
    )
}

export default LoginForm
