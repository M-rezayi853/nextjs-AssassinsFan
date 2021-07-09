import React from 'react'

import GameItem from './game-item'

const GAME_DATA = [
  {
    id: 'g1',
    imgUrl: '/images/1b.jpg'
  },
  {
    id: 'g2',
    imgUrl: '/images/2b.jpg'
  },
  {
    id: 'g3',
    imgUrl: '/images/3b.jpg'
  },
  {
    id: 'g4',
    imgUrl: '/images/4b.jpg'
  },
  {
    id: 'g5',
    imgUrl: '/images/5b.jpg'
  },
  {
    id: 'g6',
    imgUrl: '/images/6b.jpg'
  },
  {
    id: 'g7',
    imgUrl: '/images/7b.jpg'
  },
  {
    id: 'g8',
    imgUrl: '/images/8b.jpg'
  },
  {
    id: 'g9',
    imgUrl: '/images/9b.jpg'
  },
  {
    id: 'g10',
    imgUrl: '/images/10b.jpg'
  },
  {
    id: 'g11',
    imgUrl: '/images/11b.jpg'
  },
  {
    id: 'g12',
    imgUrl: '/images/12b.png'
  },
]

function Games() {
  return (
    <section className='section-game'>
      <ul className='game-showcase clearfix'>
        {GAME_DATA.map(game => (
          <GameItem key={game.id} {...game} />
        ))}
      </ul>
    </section>
  )
}

export default Games
