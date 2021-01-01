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
            <Card.Title className='card__title'><a href='https://devscript.tech/woc/'>Devscript & Script Winter of Code</a></Card.Title>
            <Card.Subtitle className="card__subtitle">Open Source </Card.Subtitle>
            <Card.Text className="card__text">
                December 2020 - Present<br /><br />
                <ul>
                    <li>Selected as a Participant for these two Open Source programs. Looking forward to contribute in front-end development.</li>
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
            <Card.Title className='card__title'><a href='https://drive.google.com/file/d/1uxFWW-jKiB4Gr0L5K-lAKrYvKU0Y11U6/view?usp=sharing'>Forage in association with JPMorgan Chase & Co.</a> </Card.Title>
            <Card.Subtitle className="card__subtitle">Software Engineering Virtual Experience </Card.Subtitle>
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
