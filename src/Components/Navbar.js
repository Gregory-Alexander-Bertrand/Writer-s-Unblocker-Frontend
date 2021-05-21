import React from 'react'
import {Link, Redirect} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/Login">Login & Signup</Link>
        </div>
    )
}

export default Navbar
