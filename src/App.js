import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import Name from './Name';
import About from './About';
import Education from './Education';
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

      <Navbar className="justify-content-center color-nav" varient='light' >
        <Navbar.Brand className='nav-brand'
          href="https://drive.google.com/file/d/1n-h7bRcF-scAL578ZoQ7qVJuNaGNneDH/view?usp=sharing"
          >
            Resume
        </Navbar.Brand>
      </Navbar>
      
      <Name />
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
