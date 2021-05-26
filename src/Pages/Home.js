import React from 'react'
import { Divider } from '@chakra-ui/react'
import Carousel from '../Components/Carousel'


const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Writers-Unblocker</h1>
            <h2>Your home for premium writing prompts</h2>
            <Divider />
            <Carousel />
            {/* <div className="quote">
                <h3 className="on-writing">"One day I will find the right words, and they will be simple."--<span>Jack Kerouac, The Dharma Bums</span></h3>
                <Divider />
                <h3 className="on-writing">"You must stay drunk of writing so reality cannot destroy you."--Ray Bradbury, Zen in the Art of Writing</h3>
                <Divider />
                <h3 className="on-writing">"You write in order to change the world, knowing perfectly well that you probably can't, but also knowing that literature is indispensable to the world."--<span>James Baldwin</span></h3>
            </div> */}
        </div>
    )
}

export default Home
