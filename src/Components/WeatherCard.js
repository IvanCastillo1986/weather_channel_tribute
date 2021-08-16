import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'


export default function WeatherCard({ weatherData }) {

    const currentConditions = weatherData.currentConditions

    return (
        <Card style={{width: '15rem'}}>
            <Card.Body>
                <Card.Title style={{fontWeight: 'bold'}}>Current Forecast</Card.Title>
                <Card.Text>
                    {weatherData.description}
                </Card.Text>
                {
                weatherData.currentConditions ?
                <ListGroup>
                    <ListGroupItem>Temperature: {currentConditions.temp}</ListGroupItem>
                    <ListGroupItem>Feels Like: {currentConditions.feelslike}</ListGroupItem>
                    <ListGroupItem>Humidity: {currentConditions.humidity}</ListGroupItem>
                    <ListGroupItem>Windspeed: {currentConditions.windspeed}</ListGroupItem>
                    <ListGroupItem>Conditions: {currentConditions.conditions}</ListGroupItem>
                </ListGroup> :
                null
                }
            </Card.Body>
        </Card>
    )
}
