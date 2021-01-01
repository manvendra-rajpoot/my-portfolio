import React from 'react';
import './Education.css';
import { Card } from 'react-bootstrap';

function Education() {
    return (
        <div className='education'>
            <h1>Education</h1>
            <div className='degree'>
            <Card >
            <Card.Body className="card__body">
            <Card.Title className='card__title'>Bachelor's Degree in Computer Science And Technology</Card.Title>
            <Card.Subtitle className="card__subtitle">Indian Institute of Engineering Science And Technology, Shibpur </Card.Subtitle>
            <Card.Text className="card__text">
                2018 - 2020
            </Card.Text>
            </Card.Body>
            </Card>
            </div>
            <div className='degree'>
            <Card >
            <Card.Body className="card__body">
            <Card.Title className='card__title'>Higher Secondray / Intermediate (+2) </Card.Title>
            <Card.Subtitle className="card__subtitle">Sri Chaitanya Vidya Niketan, Visakhapatnam </Card.Subtitle>
            <Card.Text className="card__text">
                2017
            </Card.Text>
            </Card.Body>
            </Card>
            </div>
            
        </div>
    )
}

export default Education;
