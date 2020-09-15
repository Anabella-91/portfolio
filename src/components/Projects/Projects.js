import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <div className='container' id='projects'>
            <div className='card'>
                <div className='imgBx' data-text='Youtube'>
                    <img alt='Youtube' src='./1-youtube.png'/>
                </div>
                <div className='content'>
                    <div>
                        <h3>Youtube Clon</h3>
                        <p>React, Google APIs</p>
                        <a href='https://anabella-91.github.io/youtube-clon'>Demo</a>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='imgBx' data-text='Chat'>
                    <img alt='Chat' src='./1-chat.png'/>
                </div>
                <div className='content'>
                    <div>
                        <h3>Chat</h3>
                        <p>React, Express, Node and Socket.IO</p>
                        <a href='https://5f409e06848e3d56b41f2eaa--chat-social-app.netlify.app/'>Demo</a>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='imgBx' data-text='TRVL'>
                    <img alt='TRVL' src='./1-trvl.png'/>
                </div>
                <div className='content'>
                    <div>
                        <h3>TRVL</h3>
                        <p>React, React Router</p>
                        <a href='https://react-website-1d289.web.app/'>Demo</a>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Projects;
