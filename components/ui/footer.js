import React from 'react'

function Footer() {
  return (
    <footer>
      <div className='row'>
        <div className='col span-1-of-2'>
          <ul className='footer-nav'>
            <li>
              <a href='#'>About us</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>Press</a>
            </li>
            <li>
              <a href='#'>iOS App</a>
            </li>
            <li>
              <a href='#'>Android App</a>
            </li>
          </ul>
        </div>
        <div className='col span-1-of-2'>
          <ul className='social-link'>
            <li>
              <a href='#'>
                <i className='ion-social-twitter twitter'></i>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='ion-social-facebook facebook'></i>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='ion-social-instagram instagram'></i>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='ion-social-youtube youtube'></i>
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-bottom'>
          <p>Copyright © 2020 m_hazara_77</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
