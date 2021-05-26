import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import { Button } from '@material-ui/core'
import { Box } from '@chakra-ui/react'
import CommentBox from '../Components/CommentBox'

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
        <div className="story-container">
            <Button onClick={getAllStories} variant="outlined">Get Stories</Button>
            {stories.map((story) => {
                return (
                <div className="single-story-container">
                    <p>{story.title}</p>
                <Box w="100%" key={story.id}>{story.story}</Box>
                <ul>
                    {story.comments.map((comment) => {
                        return <li>{comment.body}</li>
                    })}
                </ul>
                <CommentBox commentSubmit={story.id} />
                </div>
        
                )
            })}
        </div>
    )
}

export default ReadStories
