import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import DeleteBtn from '../Components/DeleteBtn'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'


const MyStories = (props) => {
    const [stories, setStories] = useState([])
    const [title, setTitle] = useState('')

   const getUserStories = (e) => {
       e.preventDefault()
       if (localStorage.getItem('userId')) {
           axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/stories`, {
               headers: {
                   Authorization: localStorage.getItem('userId')
               }
           }).then((response) => {
               console.log(response.data)
               setStories(response.data.stories)
           })
       }
   }
    return (
        <div>
            <Button onClick={getUserStories} variant="outlined">See My Stories</Button>
            {stories.map((story) => {
                return (
                <div>
                <Link key={story.id} to={`/MyStories/${story.id}/Revisions`}>{story.title}</Link>
                <p>{story.story}</p>
                <DeleteBtn deletedStory={story.id}/>
                </div>
                )
            })}
        </div>
    )
}

export default MyStories
