import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import DeleteBtn from '../Components/DeleteBtn'
import { Link } from 'react-router-dom'



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
            <button onClick={getUserStories} className="stories-btn">See My Stories</button>
            <div className="story-collection">
            {stories.map((story) => {
                return (
                <div className="single-story">
                <Link key={story.id} to={`/MyStories/${story.id}/Revisions`}>{story.title}</Link>
                <p>{story.story}</p>
                <DeleteBtn deletedStory={story.id}/>
                </div>
                )
            })}
            </div>
        </div>
    )
}

export default MyStories
