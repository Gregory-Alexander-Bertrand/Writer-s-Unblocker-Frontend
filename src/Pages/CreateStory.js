import React from 'react'
import StoryForm from '../Components/StoryForm'


const CreateStory = (props) => {

    return (
        <div>
            <h1>HELLO FROM CREATE STORY</h1>
            <StoryForm prompt={props.prompt}/>
        </div>
    )
}

export default CreateStory
