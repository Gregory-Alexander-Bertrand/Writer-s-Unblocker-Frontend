import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import { Button } from '@material-ui/core'
import { Box } from '@chakra-ui/react'

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
                <div>
                    
                    {/* <p key={story.id}>{story.story}</p> */}
                    <p>{story.title}</p>
                <Box w="100%" key={story.id}>{story.story}</Box>
                    
                </div>
        
                )
            })}
        </div>
    )
}

export default ReadStories
