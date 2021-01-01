import React from 'react';
import { Card } from 'react-bootstrap';
import './Accomplishment.css';

function Accomplishment() {
    return (
        <div className='accomplishment'>
            <h1>Accomplishments 🎖️</h1>
            <div className='accom'>
            <Card >
            <Card.Body className="card__body">
            <Card.Title className='card__title'><a href='https://codingcompetitions.withgoogle.com/profile'>Google KickStart 2020</a> </Card.Title>
            <Card.Text className="card__text">
                <ul>
                    <li>Among the top 5,000 programmers all over the world in this competitive programming platform.</li>
                </ul>
            </Card.Text>
            </Card.Body>
            </Card>
            </div>
            <div className='accom'>
            <Card >
            <Card.Body className="card__body">
            <Card.Title className='card__title'><a href='https://www.codechef.com/users/ghost_1'>CodeChef</a> </Card.Title>
            <Card.Text className="card__text">
                <ul>
                    <li>Rating : 3 Star at this competitive programming platform.</li>
                </ul>
            </Card.Text>
            </Card.Body>
            </Card>
            </div>
            <div className='accom'>
            <Card >
            <Card.Body className="card__body">
            <Card.Title className='card__title'><a href='https://www.hackerrank.com/manu264'>HackerRank</a> </Card.Title>
            <Card.Text className="card__text">
                <ul>
                    <li>Certified in Problem Solving, JavaScript, etc.</li>
                </ul>
            </Card.Text>
            </Card.Body>
            </Card>
            </div>
            
            
            
        </div>
    )
}

export default Accomplishment;
