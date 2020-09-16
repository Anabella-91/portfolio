import React from 'react';
import './Tech.css';

const Tech = () => {
    return (
        <div className='tech-container'>
            <h1>What can I do?</h1>
            <div className='logos'>
            <img src='./html.png'/>
            <img src='./css.png'/>
            <img src='./js.png'/>
            <img src='./react.png'/>
            <img src='./node.png'/>
            <img src='./mysql.png'/>
            <img style={{width: '150px'}} src='./mongodb.png'/>
            <img style={{width: '150px'}} src='./git.png'/>
            </div>
        </div>
    )
};

export default Tech;


