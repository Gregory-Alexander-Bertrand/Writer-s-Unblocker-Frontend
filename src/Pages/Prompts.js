import React from 'react'
import axios from 'axios'
import { useState} from 'react'

const Prompts = () => {
    const [prompt, setPrompt] = useState('')
    const [genre, setGenre] = useState('')

    const getAllPrompts = (e) => {
        e.preventDefault()
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/prompts`, {
            prompt, genre
        }).then((response) => {
            console.log(response.data)
        })
    }
    return (
        <div>
            <h1>HELLO FROM PROMPTS</h1>
            <button onClick={getAllPrompts}>Get Prompts</button>
        </div>
    )
}

export default Prompts
