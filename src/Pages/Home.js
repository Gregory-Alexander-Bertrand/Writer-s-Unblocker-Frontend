import React from 'react'
import { Divider } from '@chakra-ui/react'
import Carousel from '../Components/Carousel'


const Home = () => {
    return (
        <div className="home">
            <h1 className="motto">Welcome to Writers-Unblocker</h1>
            <h2 className="motto">Your home for premium writing prompts</h2>
            <Divider />
            <Carousel />
        </div>
    )
}

export default Home
