import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Prompts = (props) => {
    const [prompts, setPrompts] = useState([])
    const [genre, setGenre] = useState('')

    const getAllPrompts = (e) => {
        e.preventDefault()
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/prompts`, {
            prompt, genre
        }).then((response) => {
            console.log(response.data)
           setPrompts(response.data.prompts)
        })
    }

  

    return (
        <div className="all-prompts">
            <button onClick={getAllPrompts} className="render-prompts">Get Prompts</button>
            <div className="prompt-container">
           {prompts.map((prompt) => {
               return (
                <div className="prompt-links">
               <Link key={prompt.id} to={`/Prompts/${prompt.id}/CreateStory`} className="prompt">{prompt.prompt}</Link>
               </div>
               )
           })}
           </div>
        </div>
    )
}

export default Prompts
