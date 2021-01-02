import React from 'react';
import './Name.css';
import avatar from './icons/avatar.jpeg';


function Name() {
    return (
        <div className='name'>
            <h1>Manvendra <br />Rajpoot</h1> 
            <img src={avatar} alt='Manvendra' />
        </div>
    )
}

export default Name;
