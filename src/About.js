import React from 'react';
import './About.css';

function About() {
    return (
        <div className='about'>
            <h1>About Me 👋</h1>
            <p className='greet'>Hello!</p>
            <p className='description'>My name is Manvendra, a junior from India 🇮🇳. <br /><br />
                I am open-source enthusiast, a learner, passionate about Web Development and
                Machine Learning & enjoy solving competitive programming questions.
                I am looking to collaborate in Open Source and make new friends.<br /><br />
                
            </p>
            <div className='socialHandles'>
                <a href="mailto:manvendra141986@gmail.com">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/gmail.svg" 
                alt = 'Gmail' />
                </a>
                <a href="https://www.linkedin.com/in/manvendrajpoot/">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg"
                alt='linkedin'/>
                </a>
                <a href="https://github.com/manvendra-rajpoot">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg"
                alt ='github' />
                </a>
                <a href="https://dev.to/manvendrajpoot">
                <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" 
                alt="DEV" />
                </a>
                <a href="https://twitter.com/manvendrajpoot_/">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg"
                alt='twitter' />
                </a>
                <a href="https://www.instagram.com/manvendrajpoot_/">
                <img  src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" 
                alt='Insta' />
                </a>
                <a href="https://www.facebook.com/manvendrajpoot.0/">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/facebook.svg"
                alt ='facebook' />
                </a>
            </div>    
        </div>
    )
}

export default About;
