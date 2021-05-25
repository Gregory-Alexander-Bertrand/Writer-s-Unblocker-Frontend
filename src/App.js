import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Router} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Prompts from './Pages/Prompts'
import CreatePrompts from './Pages/CreatePrompts'
import CreateStory from './Pages/CreateStory'
import ReadStories from './Pages/ReadStories'
import Navbar from './Components/Navbar'


function App() {
  const [user, setUser] = useState({})
  const [stories, setStories] = useState({})

  const fetchUser = () => {
    if (localStorage.getItem('userId')) {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/verify`, {
        headers: {
          Authorization: localStorage.getItem('userId')
        }
      })
      .then((response) => {
        console.log(response)
        setUser(response.data.user)
        setStories(response.data.user.stories)
      })
    }
  }

  useEffect(fetchUser, [])

  return (
    <div className="App">
    <Navbar user={user}
    setUser={setUser}/>
    <Route
    exact path="/"
    render={() => {
      return <Home />
    }}
    />
    {/* <Route 
     path="/Login"
     render={(props) => (
       <Login {...props} setUser={setUser} />
     )}
    /> */}
    <Route
    path="/Login"
    render={() => {
      console.log(user.id)
      if (user.id) {
        return <Redirect to="/" />
      } else {
        return <Login setUser={setUser} />
      }
    }}
    />
    {/* <Route 
    path="/Prompts"
    render={(props) => (
      <Prompts {...props} setUser={setUser} />
    )}
    /> */}
    <Route 
    exact path="/Prompts"
    render={() => {
      if(user.id) {
        return <Prompts user={user} />
      } else {
        return <Redirect to="/Login" />
      }
    }}
    />
   <Route 
   path="/CreatePrompts"
   render={() => {
     return <CreatePrompts />
   }}
   />
   <Route
   path="/Prompts/:id/CreateStory"
   render={(routingInfo) => {
     console.log(routingInfo)
     const id = routingInfo.match.params.id
     return<CreateStory prompt={id} />
   }}
   />
   <Route 
   path="/ReadStories"
   render={() => {
     if(user.id) {
       return <ReadStories user={user}/>
     } else {
       return <Redirect to="/" />
     }
   }}
   />
    </div>
  );
}

export default App;
