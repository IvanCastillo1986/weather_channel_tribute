import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import { Container, Row, Col } from 'react-bootstrap'

import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Current from './Pages/Current'
import ThreeDay from './Pages/ThreeDay'


export default function App() {


  return (

    <div className='App'>
      <Container fluid>
        <Row>
          <Col xs={2}>
            <NavBar />
          </Col>
          <Col>
          <main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/current' component={Current} />
              <Route path='/3day' component={ThreeDay} />
            </Switch>
          </main>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
