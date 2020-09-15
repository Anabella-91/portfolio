import React from 'react';
import Typical from 'react-typical';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <h1>Hi, I'm Anabella Da Rocha</h1>
            <Typical 
                loop={Infinity}
                steps={[
                'Web Developer', 2000,
                'based in Buenos Aires, Argentina',
                2000
                ]}
            /><br/>
            <i class="fab fa-linkedin-in"><a target='_blank' href='https://www.linkedin.com/in/anabella-da-rocha-940b9267/'>Linkedin</a></i>
            <i class="fab fa-github"><a target='_blank' href='https://github.com/Anabella-91'>Github</a></i>
            <hr/>
        </div>
    )
}

export default Header;
