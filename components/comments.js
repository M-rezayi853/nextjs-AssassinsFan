import React from 'react'
import Image from 'next/image'

function Comments() {
  return (
    <section className='section-comment'>
      <div className='row'>
        <h2>OUR CUSTOMERS CAN&apos;T LIVE WITHOUT US</h2>
      </div>
      <div className='row'>
        <div className='col span-1-of-3'>
          <blockquote>
            I&apos;m glad that Assassin&apos;s Creed, it&apos;s now RPG, which
            means I can fully dissolve in the game, the world, the character and
            play their role. Assassin&apos;sfan, thank you!
            <cite>
              <div className='imgCite'>
                <Image
                  src='/images/user-1.jpg'
                  alt='user-1'
                  width={50}
                  height={50}
                />
              </div>
              Kim So-eun
            </cite>
          </blockquote>
        </div>
        <div className='col span-1-of-3'>
          <blockquote>
            Most complete game ever made. Epic in scale. Wonderfully detailed.
            So many mechanics, so easy to use. This is a masterpiece. I wish you
            the best.
            <cite>
              <div className='imgCite'>
                <Image
                  src='/images/user-2.jpg'
                  alt='user-2'
                  width={50}
                  height={50}
                />
              </div>
              Song Joong-ki
            </cite>
          </blockquote>
        </div>
        <div className='col span-1-of-3'>
          <blockquote>
            This game is Amazing. I haven&apos;t been this absorbed into a game
            in years. I am playing on Hard difficulty and have never once felt
            underleveled. Assassin&apos;s fan I love you!
            <cite>
              <div className='imgCite'>
                <Image
                  src='/images/user-3.jpg'
                  alt='user-3'
                  width={50}
                  height={50}
                />
              </div>
              Han Hyo-joo
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default Comments
