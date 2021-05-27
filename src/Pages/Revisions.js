import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { TextField, Button} from '@material-ui/core'
import { Textarea } from '@chakra-ui/react'

const Revisions = ({id}) => {
    const [title, setTitle] = useState('')
    const [story, setStory] = useState('')

    const updateStory = () => {
        console.log(id)
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/story/story/${id}`, {
            title, story
        }).then((response) => {
            console.log(response)
        })
    }

    return (
        <div className="revisions">
            <h1>Time to create that all important 2nd draft, or 3rd, or 4th...</h1>
            <form onSubmit={updateStory}>
                <div>
                <TextField id="standard-basic" label="title" required value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                <Textarea value={story} required onChange={(e) => setStory(e.target.value)} />
                </div>
                <div>
                    <Button type="submit">Update Story</Button>
                </div>
            </form>
        </div>
    )
}

export default Revisions
