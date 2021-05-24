import React from 'react'
import axios from 'axios'
import { useState} from 'react'

const ReadStories = (props) => {
    const [stories, setStories] = useState([])
    const [title, setTitle] = useState('')
    

    const getAllStories = (e) => {
        e.preventDefault()
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/allstories`, {
           stories, title
        }).then((response) => {
            console.log(response.data)
            setStories(response.data.stories)
        })
    }
    return (
        <div>
            <button onClick={getAllStories}>Get Stories</button>
            {stories.map((story) => {
                return (
                <p key={story.id}>{story.story}  {story.title}</p>
        
                )
            })}
        </div>
    )
}

export default ReadStories
