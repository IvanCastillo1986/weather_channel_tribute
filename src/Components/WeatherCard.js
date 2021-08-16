import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'


export default function WeatherCard({ weatherData }) {

    // const currentConditions = weatherData.currentConditions

    return (
        <Card style={{width: '15rem'}}>
            <Card.Body>
                <Card.Title>Today</Card.Title>
                <Card.Text>
                    {weatherData.description}
                </Card.Text>
                <ListGroup>
                    <ListGroupItem>Temperature: </ListGroupItem>
                    <ListGroupItem>Feels Like: </ListGroupItem>
                    <ListGroupItem>Humidity: </ListGroupItem>
                    <ListGroupItem>Windspeed: </ListGroupItem>
                    <ListGroupItem>Conditions: </ListGroupItem>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}
