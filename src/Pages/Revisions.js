import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { TextField, Button} from '@material-ui/core'
import { Textarea } from '@chakra-ui/react'

const Revisions = () => {
    return (
        <div>
            <h1>Time to create that all important 2nd draft, or 3rd, or 4th...</h1>
            <form>
                <div>
                <TextField id="standard-basic" label="title" />
                </div>
                <div>
                <Textarea />
                </div>
                <div>
                    <button type="submit">Update Story</button>
                </div>
            </form>
        </div>
    )
}

export default Revisions
