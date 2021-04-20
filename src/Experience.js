import React from 'react';
import { Card } from 'react-bootstrap';
import './Experience.css';

function Experience() {
    return (
        <div class='experienceList'>
            <h1>Experience 💼</h1>
            
            <div className='exp'>
            <Card >
            <Card.Body className="card__body">
            <Card.Title className='card__title'><a href='https://lucid-edison-b3452a.netlify.app/'>Crio Winter of Doing</a></Card.Title>
            <Card.Subtitle className="card__subtitle">Open Source </Card.Subtitle>
            <Card.Text className="card__text">
                January 2021 - March 2021<br /><br />
                <ul>
                    <li>A full stack web development project is built using ReactJs as frontend, ExpressJs as backend and MySQL as database.</li>
                    <li>
                    It is basically a meme sharing web application.
                    </li>
                </ul>
            </Card.Text>
            </Card.Body>
            </Card>
            </div>
            <div className='exp'>
            <Card >
            <Card.Body className="card__body">
            <Card.Title className='card__title'><a href='https://github.com/ahampriyanshu/algo_ds_101/pull/69'>Hacktoberfest</a></Card.Title>
            <Card.Subtitle className="card__subtitle">Open Source </Card.Subtitle>
            <Card.Text className="card__text">
                October 2020<br /><br />
                <ul>
                    <li>Submitted one pull request (PR) on implementation of generic Binary Search Tree (BST).</li>
                </ul>
            </Card.Text>
            </Card.Body>
            </Card>
            </div>
            <div className='exp'>
            <Card >
            <Card.Body className="card__body">
            <Card.Title className='card__title'><a href='https://drive.google.com/file/d/1uxFWW-jKiB4Gr0L5K-lAKrYvKU0Y11U6/view?usp=sharing'>Software Engineering Virtual Experience @Forage</a> </Card.Title>
            {/* <Card.Subtitle className="card__subtitle">Software Engineering Virtual Experience </Card.Subtitle> */}
            <Card.Text className="card__text">
                May 2020<br /><br />
                <ul>
                    <li>Completed practical task modules in:<br /> 
                            - Establishing Financial Data Feeds <br />
                            - Frontend Web Development <br />
                            - Data Visualization with Perspective. <br />
                    </li>
                </ul>
            </Card.Text>
            </Card.Body>
            </Card>
            </div>
            
        </div>
    )
}

export default Experience;
