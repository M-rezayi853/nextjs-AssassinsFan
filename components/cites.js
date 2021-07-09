import React from 'react'

import CityItem from './city-item'

const CITY_DATA = [
  {
    id: 'c1',
    imgUrl: '/images/cites/1a.jpg',
    title: 'Cyprus',
    users: '21600',
    pgamers: '12500',
    xgamers: '6300',
    twitter: '@assassin\'sfan_Cy'
  },
  {
    id: 'c2',
    imgUrl: '/images/cites/2a.jpg',
    title: 'Egypt',
    users: '57900',
    pgamers: '32500',
    xgamers: '16400',
    twitter: '@assassin\'sfan_Eg'
  },
  {
    id: 'c3',
    imgUrl: '/images/cites/3a.jpg',
    title: 'London',
    users: '68300',
    pgamers: '42500',
    xgamers: '19800',
    twitter: '@assassin\'sfan_Lo'
  },
  {
    id: 'c4',
    imgUrl: '/images/cites/4a.jpg',
    title: 'Istanbul',
    users: '31300',
    pgamers: '17400',
    xgamers: '11800',
    twitter: '@assassin\'sfan_Is'
  },
  {
    id: 'c5',
    imgUrl: '/images/cites/5a.jpg',
    title: 'Ancient Greece',
    users: '85400',
    pgamers: '56100',
    xgamers: '24700',
    twitter: '@assassin\'sfan_Ag'
  },
]

function Cites() {
  return (
    <section className='section-city' id='game-id'>
      <div className='row'>
        <div className='city-title'>
          <h2>Some of the most attractive cities in Assassin&apos;s Creed</h2>
        </div>
      </div>

      <div className='row'>
        {CITY_DATA.map(city => (
          <CityItem key={city.id} {...city} />
        ))}
      </div>
    </section>
  )
}

export default Cites
