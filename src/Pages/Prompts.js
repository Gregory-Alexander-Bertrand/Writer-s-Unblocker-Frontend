import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Prompts = (props) => {
    const [prompts, setPrompts] = useState('')
    const [genre, setGenre] = useState('')

    const getAllPrompts = (e) => {
        e.preventDefault()
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/prompts`, {
            prompt, genre
        }).then((response) => {
            console.log(response.data.prompts)
            {Object.keys(prompts).map((keyName, i) => (
                <li>{i}</li>
                ))}
        })
    }

    // {Object.keys(prompts).map((keyName, i) => (
    // <li>{i}</li>
    // ))}

    return (
        <div>
            <button onClick={getAllPrompts}>Get Prompts</button>
            {/* <ul>
                {prompts}
            </ul> */}
           {/* {prompts.map((prompt) => {
               return (
               <li key={prompt.id}>{prompt.prompt}</li>
               )
           })} */}
        </div>
    )
}

export default Prompts
