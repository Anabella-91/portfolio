import React from 'react';
import './Tech.css';

const Tech = () => {
    return (
        <div className='tech-container'>
            <h1>What can I do?</h1>
            <img src='./html.png'/>
            <img src='./css.png'/>
            <img style={{height: '100px'}}src='./js.png'/>
            <img src='./react.jpg'/>
            <img src='./node.png'/>
            <img src='./mysql.png'/>
            <img style={{width: '100px'}}src='./mongodb.png'/>
        </div>
    )
};

export default Tech;


