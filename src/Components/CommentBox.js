import React from 'react'
import { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import axios from 'axios'


const CommentBox = (props) => {
    const [body, setBody] = useState('')

    const commentSubmit = () => {
        if (localStorage.getItem('userId')) {
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/stories/story/${props.commentSubmit}/comment`, {body}, {
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
        <form onSubmit={commentSubmit}>
            <div>
                <TextField id="filled-basic" variant="filled" required value={body} onChange={(e) => setBody(e.target.value)} />
            </div>
            <div>
                <Button type="submit">Enter</Button>
            </div>
        </form>
        </div>
    )
}

export default CommentBox
