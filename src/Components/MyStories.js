import React from 'react'
import axios from 'axios'
import { useState } from 'react'

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
            <button onClick={getUserStories}>See My Stories</button>
            {stories.map((story) => {
                return (
                <p key={story.id}>{story.story}</p>
                )
            })}
        </div>
    )
}

export default MyStories
