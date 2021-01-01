import React from 'react';
import './Tech.css';
import c from './icons/c.png';
import cpp from './icons/cpp.png';
import js from './icons/js.png';
import python from './icons/python.png';
import java from './icons/java.png';
import html from './icons/html.png';
import css from './icons/css.png';
import node from './icons/node.png';
import react from './icons/react.png';
import mysql from './icons/mysql.png';
import mongodb from './icons/mongodb.png';
import numpy from './icons/numpy.png';
import matplotlib from './icons/matplotlib.png';
import seaborn from './icons/seaborn.png';
import pandas from './icons/pandas.png';
import dsa from './icons/dsa.png';
import oop from './icons/oop.png';



function Tech() {
    return (
        <div className='tech'>
            <h1>Tech Stack 👨‍💻 </h1>
            <div className='tech__list'>
                <div className='icon'>
                    <img src={c} alt='c' />
                    <h5>C</h5>
                </div>
                <div className='icon'>
                    <img src={cpp} alt='cpp' />
                    <h5>C++</h5>
                </div>
                <div className='icon'>
                    <img src={python} alt='python' />
                    <h5>Python</h5>
                </div>
                <div className='icon'>
                    <img src={java} alt='java' />
                    <h5>Java</h5>
                </div>
                <div className='icon'>
                    <img src={js} alt='js' />
                    <h5>JavaScript</h5>
                </div>
                <div className='icon'>
                    <img src={html} alt='html' />
                    <h5>HTML</h5>
                </div>
                <div className='icon'>
                    <img src={css} alt='css' />
                    <h5>CSS</h5>
                </div>
                <div className='icon'>
                    <img src={react} alt='react' />
                    <h5>React</h5>
                </div>
                <div className='icon'>
                    <img src={node} alt='node' />
                    <h5>Node</h5>
                </div>
                <div className='icon'>
                    <img src={numpy} alt='numpy' />
                    <h5>Numpy</h5>
                </div>
                <div className='icon'>
                    <img src={matplotlib} alt='matplotlib' />
                    <h5>Matplotlib</h5>
                </div>
                <div className='icon'>
                    <img src={seaborn} alt='seaborn' />
                    <h5>Seaborn</h5>
                </div>
                <div className='icon'>
                    <img src={pandas} alt='pandas' />
                    <h5>Pandas</h5>
                </div>
                <div className='icon'>
                    <img src={mysql} alt='mysql' />
                    <h5>MySQL</h5>
                </div>
                <div className='icon'>
                    <img src={mongodb} alt='mongodb' />
                    <h5>MongoDB</h5>
                </div>
                <div className='icon'>
                    <img src={dsa} alt='dsa' />
                    <h5>Data Structures & Algorithms</h5>
                </div>
                <div className='icon'>
                    <img src={oop} alt='oop' />
                    <h5>Object Oriented Programming</h5>
                </div>
                
            </div>
            
        </div>
    )
}

export default Tech;
