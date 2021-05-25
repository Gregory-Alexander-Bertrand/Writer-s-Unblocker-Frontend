import React from 'react'
import { useState } from 'react'
import { TextField, Box, Button} from '@material-ui/core' 
import { Input } from "@chakra-ui/react"
import axios from 'axios'



const PromptInput = () => {

    
    const [genre, setGenre] = useState('')
    const [prompt, setPrompt] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/prompt`, {
            genre, prompt
        }).then((response) => {
            console.log(response)
        })
    }

    const successMessage = () => {
        console.log('success')
    }
   
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Create a unique prompt for everyone to use</h1>
                <TextField id="outlined-basic" label="Genre" required value={genre} onChange={(e) => setGenre(e.target.value)} />
                <Box m={.6} />
                <TextField id="outlined-basic" label="Prompt" required vale={prompt} onChange={(e) => setPrompt(e.target.value)} />
                <Box m={2} />
                <Button type="submit" onClick={successMessage}>Inspire Others</Button>
            </form>
        </div>
    )
}

export default PromptInput
