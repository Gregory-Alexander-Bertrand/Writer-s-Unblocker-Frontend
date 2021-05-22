import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Router} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Prompts from './Pages/Prompts'
import Navbar from './Components/Navbar'


function App() {
  const [user, setUser] = useState({})
  return (
    <div className="App">
    <Navbar />
    <Route
    exact path="/"
    render={() => {
      return <Home />
    }}
    />
    <Route 
     path="/Login"
     render={(props) => (
       <Login {...props} setUser={setUser} />
     )}
    />
    <Route 
    path="/Prompts"
    render={(props) => (
      <Prompts {...props} setUser={setUser} />
    )}
    />
    </div>
  );
}

export default App;
