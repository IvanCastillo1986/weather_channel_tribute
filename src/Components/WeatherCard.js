import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'


export default function WeatherCard({ day }) {

    console.log(day)

    return (
        <Card style={{width: '15rem'}}>
            <Card.Body>
                <Card.Title style={{fontWeight: 'bold'}}>Current Forecast</Card.Title>
                <Card.Text>
                    {day.description}
                </Card.Text>
                {
                day.conditions ?
                <ListGroup>
                    <ListGroupItem>Temperature: {day.temp}</ListGroupItem>
                    <ListGroupItem>Feels Like: {day.feelslike}</ListGroupItem>
                    <ListGroupItem>Humidity: {day.humidity}</ListGroupItem>
                    <ListGroupItem>Windspeed: {day.windspeed}</ListGroupItem>
                    <ListGroupItem>Conditions: {day.conditions}</ListGroupItem>
                </ListGroup> :
                null
                }
            </Card.Body>
        </Card>
    )
}
