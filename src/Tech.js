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
import express from './icons/express.png';
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
                    <h6>C</h6>
                </div>
                <div className='icon'>
                    <img src={cpp} alt='cpp' />
                    <h6>C++</h6>
                </div>
                <div className='icon'>
                    <img src={python} alt='python' />
                    <h6>Python</h6>
                </div>
                <div className='icon'>
                    <img src={java} alt='java' />
                    <h6>Java</h6>
                </div>
                <div className='icon'>
                    <img src={js} alt='js' />
                    <h6>JavaScript</h6>
                </div>
                <div className='icon'>
                    <img src={html} alt='html' />
                    <h6>HTML</h6>
                </div>
                <div className='icon'>
                    <img src={css} alt='css' />
                    <h6>CSS</h6>
                </div>
                <div className='icon'>
                    <img src={react} alt='react' />
                    <h6>ReactJS</h6>
                </div>
                <div className='icon'>
                    <img src={node} alt='node' />
                    <h6>NodeJS</h6>
                </div>
                <div className='icon'>
                    <img src={express} alt='express' />
                    <h6>ExpressJS</h6>
                </div>
                <div className='icon'>
                    <img src={mysql} alt='mysql' />
                    <h6>MySQL</h6>
                </div>
                <div className='icon'>
                    <img src={mongodb} alt='mongodb' />
                    <h6>MongoDB</h6>
                </div>
                {/* <div className='icon'>
                    <img src={numpy} alt='numpy' />
                    <h6>Numpy</h6>
                </div>
                <div className='icon'>
                    <img src={matplotlib} alt='matplotlib' />
                    <h6>Matplotlib</h6>
                </div>
                <div className='icon'>
                    <img src={seaborn} alt='seaborn' />
                    <h6>Seaborn</h6>
                </div> 
                <div className='icon'>
                    <img src={pandas} alt='pandas' />
                    <h6>Pandas</h6>
                </div> */}
                <div className='icon'>
                    <img src={dsa} alt='dsa' />
                    <h6>Data Structures & Algorithms</h6>
                </div>
                <div className='icon'>
                    <img src={oop} alt='oop' />
                    <h6>Object Oriented Programming</h6>
                </div>
                
            </div>
            
        </div>
    )
}

export default Tech;
