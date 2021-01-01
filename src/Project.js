import React from 'react';
import { Card } from 'react-bootstrap';
import './Project.css';

function Project() {
    return (
        <div className='projectList'>
            <h1>Projects 🚀</h1>
            <div className='project'>
            <Card >
            <Card.Body className="card__body">
            <Card.Title className='card__title'><a href='https://daynight-chat.web.app/'>ChatApp1.0</a></Card.Title>
            <Card.Text className="card__text">
                December 2020<br /><br />
                <ul>
                    <li>It is kind of whatsapp-clone and user have to use google account to login.</li>
                    <li>It uses Firestore Realtime database for messages, React Router, React Context API, Google Authentication, Material UI
                        and finally hosted at Firebase.</li>
                </ul>
            </Card.Text>
            </Card.Body>
            </Card>
            </div>
            <div className='project'>
            <Card >
            <Card.Body className="card__body">
            <Card.Title className='card__title'><a href='https://covid19-tracker-z.web.app/'>Covid-19 Tracker</a></Card.Title>
            <Card.Text className="card__text">
                November 2020 - December 2020<br /><br />
                <ul>
                    <li><strong>disease.sh</strong> API is used to extract details related to corona-cases, recovered and deaths of every country and
                        worldwide in general.</li>
                        <li>It is built using React, Material UI and deployed at Firebase.</li>
                    <li>Some other main dependencies like chart.js for bargraph, react-leaflet for map are also used.</li>
                </ul>
            </Card.Text>
            </Card.Body>
            </Card>
            </div>
            <div className='project'>
            <Card >
            <Card.Body className="card__body">
            <Card.Title className='card__title'><a href='https://manvendra-rajpoot.github.io/2-D-Table-Tennis-Game/' >Table-Tennis, Mobile-Snake and Tic-Tac-Toe Games</a></Card.Title>
            <Card.Text className="card__text">
                April 2020 - October 2020<br /><br />
                <ul>
                    <li>The table-tennis and mobile-snake games are developed using canvas and drawing on screen at defined setInterval() in JavaScript.</li>
                    <li>The tic-tac-toe is developed using React and deployed at Firebase. </li>
                </ul>
            </Card.Text>
            </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default Project;
