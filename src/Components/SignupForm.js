import React from 'react'
import { useState } from 'react'
import { TextField, Box, Button} from '@material-ui/core'
import axios from 'axios'
const SignupForm = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users`, {
            name, email, password
        }).then((response) => {
            console.log(response)
            props.setUser(response.data.user)
            localStorage.setItem('userId', response.data.userId)
        })
    }
    return (
        <div className="Login-Signup">
            <form onSubmit={handleSubmit} className="sign-up">
                <h1>Sign Up</h1>
                <TextField id="standard-basic" label="name" required value={name} onChange={(e) => setName(e.target.value)} />
                <Box m={.6} />
                <TextField id="standard-basic" label="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <Box m={.6} />
                <TextField id="standard-basic" label="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <Box m={.6} />
                <Button type="submit">Sign up</Button>
            </form>
        </div>
    )
}

export default SignupForm
