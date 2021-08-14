import React from 'react'
import { Card } from 'react-bootstrap'


export default function WeatherCard({ weatherData }) {


    return (
        <Card style={{width: '15rem'}}>
            <Card.Body>
                <Card.Title>Today</Card.Title>
                <Card.Text>
                    {weatherData.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
