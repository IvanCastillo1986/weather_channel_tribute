import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Weather from './Pages/Weather'


export default function App() {


  return (

    <div>
      <NavBar />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </div>
  )
}
