import React from 'react';
import { Card } from 'react-bootstrap';
import './Volunteer.css';

function Volunteer() {
    return (
        <div className='volunteer'>
            <h1>Volunteering ♀️♂️ </h1>
            <div className='community'>
            <Card >
            <Card.Body className="card__body">
            <Card.Title className='card__title'><a href='https://codecau.se/yt'>Code For Cause</a> </Card.Title>
            <Card.Subtitle className="card__subtitle">Campus Leader </Card.Subtitle>
            <Card.Text className="card__text">
                November 2020 - Present<br /><br />
                <ul>
                    <li>It is an initiative to help the students by providing training, guidance and most importantly awareness about the possibilities in the field of software, tech and Open Source.</li>
                </ul>
            </Card.Text>
            </Card.Body>
            </Card>
            </div>
            
        </div>
    )
}

export default Volunteer;
