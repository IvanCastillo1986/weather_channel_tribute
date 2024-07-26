import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'


import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Logo from './Components/Logo'
import DateTime from './Components/DateTime'
import Home from './Pages/Home'
import Current from './Pages/Current'
import ThreeDay from './Pages/ThreeDay'
import About from './Pages/About'


export default function App() {


  return (

    <div className='App'>
      <NavBar />
      <main>
        <Logo />
        <header className='Header'>
          <span className='title'>Latest Observations</span>
          <DateTime />
        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/current' component={Current} />
          <Route path='/3day' component={ThreeDay} />
          <Route path='/about' component={About} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}
