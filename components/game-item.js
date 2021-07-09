import React from 'react'
import Image from 'next/image'

function GameItem({ imgUrl }) {
  return (
    <li>
      <figure className='game-photo'>
        <Image 
          src={`${imgUrl}`} 
          alt="Assassin's Creed image" 
          width={600}
          height={400}
        />
      </figure>
    </li>
  )
}

export default GameItem
