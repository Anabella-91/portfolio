import React from 'react';
import './Tech.css';

const Tech = () => {
    return (
        <div className='tech-container'>
            <h1>What can I do?</h1>
            <img src='./html.png'/>
            <img src='./css.png'/>
            <img style={{height: '100px'}}src='./js.png'/>
            <img src='./react.png'/>
            <img src='./node.png'/>
            <img src='./mysql.png'/>
            <img style={{width: '150px', height: '40px'}}src='./mongodb.png'/>
            <img src='./git.png'/>
        </div>
    )
};

export default Tech;


