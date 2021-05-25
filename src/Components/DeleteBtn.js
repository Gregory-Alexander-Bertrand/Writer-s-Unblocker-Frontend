import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Button from '@material-ui/core/Button'


const DeleteBtn = (props) => {
    const [story, setStory] = useState([])
    
    const deleteStory = (id) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/stories/story/${id}`, {
            story
        }).then((response) => {
            console.log(response)
        })
    }
    return (
        <div>
            <Button onClick={() => {deleteStory(props.deletedStory)}} variant="contained" color="secondary">Delete Story</Button>
        </div>
    )
}

export default DeleteBtn
