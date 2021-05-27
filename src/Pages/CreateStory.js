import React from 'react'
import StoryForm from '../Components/StoryForm'


const CreateStory = (props) => {

    return (
        <div className="create-story">
            <StoryForm prompt={props.prompt}/>
        </div>
    )
}

export default CreateStory
