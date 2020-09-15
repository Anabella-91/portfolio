import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='social-media-wrap'>
          <p>AniDaRocha © 2020</p>
          <div className='social-icons'>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/anidarochaa/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link twitter'
              href='https://twitter.com/anidarocha'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </a>
            <a
              className='social-icon-link twitter'
              href='https://www.linkedin.com/in/anabella-da-rocha-940b9267/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
    </div>
  );
}

export default Footer;