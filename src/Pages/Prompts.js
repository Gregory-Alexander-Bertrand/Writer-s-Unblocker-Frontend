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
            // {Object.prompts.map((prompt) => (
            //     <li>{prompt.id}</li>
            //     ))} 
        })
    }

  

    return (
        <div>
            <button onClick={getAllPrompts}>Get Prompts</button>
            {/* <ul>
                {prompts}
            </ul> */}
           {prompts.map((prompt) => {
               return (
                <div>
               <Link key={prompt.id} to={`/Prompts/${prompt.id}/CreateStory`}>{prompt.prompt}</Link>
               </div>
               )
           })}
        </div>
    )
}

export default Prompts
