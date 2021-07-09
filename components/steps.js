import React from 'react'
import Image from 'next/image'

function Steps() {
  return (
    <section className='section-step' id='step-id'>
      <div className='row'>
        <div className='step-title'>
          <h2>HOW IT WORKS &ndash; SIMPLE AS 1, 2, 3</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col span-1-of-2 step-box'>
          <Image
            className='app-screen  js--wp--2'
            src='/images/iphone11-new.png'
            alt="iPhone 11 Asssassin's image"
            width={200}
            height={500}
          />
        </div>
        <div className='col span-1-of-2 step-box'>
          <div className='step-work'>
            <div>1</div>
            <p>
              Choose the subscription plan that best fits your needs and sign up
              today.
            </p>
          </div>
          <div className='step-work'>
            <div>2</div>
            <p>
              Order your game play using our mobile app or website. Or you can
              even call us!
            </p>
          </div>
          <div className='step-work'>
            <div>3</div>
            <p>
              Enjoy your game play after less than 90 minutes. See you the next
              time!
            </p>
          </div>

          <a href='#'>
            <div>
              <Image
                src='/images/app-store-badge.svg'
                alt='app store'
                width={100}
                height={36}
              />
            </div>
          </a>
          <a href='#'>
            <div>
              <Image
                src='/images/google-play-badge.svg'
                alt='play store'
                width={100}
                height={36}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Steps
