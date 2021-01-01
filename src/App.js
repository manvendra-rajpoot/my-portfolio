import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Education from './Education';
import About from './About';
import Tech from './Tech';


function App() {
  return (
    <div className="app">
      <h3>
        <a href='https://drive.google.com/file/d/1gLnPt5hEyXbV0UsDcvQmxzjmfhwsI1SG/view?usp=sharing/'>Resume</a>
      </h3>
      <div className='name'>
        <h1>Manvendra <br />Rajpoot</h1>
        <img src='https://avatars0.githubusercontent.com/u/53949277?s=400&u=cff91b5655d56f505402273e6fa79928f28a8148&v=4' 
        alt='Manvendra' />
      </div>
      <About />
      <Education />
      <Tech />


    </div>
  );
}

export default App;
