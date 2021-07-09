import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header>
      <nav>
        <div className='row'>
          <div className='hero-image'>
            <div className='logo'>
              <Image
                src='/images/new-logo-white.png'
                alt='log image'
                width={100}
                height={100}
              />
            </div>
            <div className='logo-black'>
              <Image
                src='/images/new-logo-black.png'
                alt='log black image'
                width={50}
                height={50}
              />
            </div>
          </div>
          <ul className='main-nav js--main-nav'>
            <li>
              <a href='#feature-id'>Game delivery</a>
            </li>
            <li>
              <a href='#step-id'>How it work</a>
            </li>
            <li>
              <a href='#game-id'>Assassin&apos;s games</a>
            </li>
            <li>
              <a href='#sign-up-id'>Sign up</a>
            </li>
          </ul>
          <a className='mobaile-nav-icon js--nav-icon'>
            <i className='ion-navicon-round'></i>
          </a>
        </div>
      </nav>
      <div className='hero-title'>
        <h1>
          <span className='assassin-text-1'>An attractive place</span>
          <br />
          For <span className='assassin-text-2'>Assassin&apos;s Creed</span> fans.
        </h1>
        <a className='btn btn-full' href='#sign-up-id'>
          I am ready
        </a>
        <a className='btn btn-ghost' href='#feature-id'>
          Show me more
        </a>
      </div>
    </header>
  )
}

export default Header
