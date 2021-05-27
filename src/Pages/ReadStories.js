import React from 'react'
import axios from 'axios'
import { useState} from 'react'
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
            <button onClick={getAllStories} className="get-stories-btn">Get Stories</button>
            {stories.map((story) => {
                return (
                <div className="single-story-container">
                    <h1>{story.title}</h1>
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
