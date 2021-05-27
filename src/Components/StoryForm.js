import React from 'react'
import { useState } from 'react'
import { TextField, Box, Button} from '@material-ui/core'
import { Textarea } from "@chakra-ui/react"
import axios from 'axios'

const StoryForm = (props) => {
    const [title, setTitle] = useState('')
    const [story, setStory] = useState('')

    


    const handleSubmit = () => {
        if (localStorage.getItem('userId')) {
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/stories`, {title, story, prompt_id:props.prompt}, {
                headers: {
                    Authorization: localStorage.getItem('userId')
                }
            }).then((response) => {
                console.log(response)
            })
        }
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Write your story in the field below</h1>
                <div>
                <TextField id="standard-basic" label="title" required value={title} onChange={(e) => setTitle(e.target.value) } />
                </div>
                <div>
                <Textarea value={story} onChange={handleSubmit} onChange={(e) => setStory(e.target.value)}  placeholder= "Stretch me, drag me, pull me any way you want."/>
                </div>
                <div>
                <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default StoryForm
