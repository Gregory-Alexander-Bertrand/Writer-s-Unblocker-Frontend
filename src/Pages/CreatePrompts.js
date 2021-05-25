import React from 'react'
import PromptInput from '../Components/PromptInput'
import MyStories from '../Components/MyStories'

const CreatePrompts = () => {
    return (
        <div>
            <PromptInput />
            <h3>Update your stories by clicking on their title</h3>
            <MyStories />
        </div>
    )
}

export default CreatePrompts
