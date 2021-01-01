import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from './icons/avatar.jpeg'
import Education from './Education';
import About from './About';
import Tech from './Tech';
import Project from './Project';
import Experience from './Experience';
import Volunteer from './Volunteer';
import Accomplishment from './Accomplishment';
import Blog from './Blog';
import Connect from './Connect';


function App() {
  return (
    <div className="app">
      <h3>
        <a href='https://drive.google.com/file/d/1n-h7bRcF-scAL578ZoQ7qVJuNaGNneDH/view?usp=sharing' >
          Resume
        </a>
      </h3>
      <div className='name'>
        <h1>Manvendra <br />Rajpoot</h1>
        <img src={avatar} alt='Manvendra' />
      </div>
      <About />
      <Education />
      <Tech />
      <Project />
      <Experience />
      <Volunteer />
      <Accomplishment />
      <Blog />
      <Connect />

      <h4 className='endline'>May the sources be with you. Thank you! 😃</h4>

    </div>
  );
}

export default App;
