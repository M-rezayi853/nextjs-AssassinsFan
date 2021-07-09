import React from 'react'
import Image from 'next/image'

function CityItem({ imgUrl, title, users, pgamers, xgamers, twitter  }) {
  return (
    <div className='col span-1-of-5 span3of5'>
      <div className='city-photo'>
        <Image
          className='city-img'
          src={`${imgUrl}`}
          alt='city'
          width={350}
          height={250}
        />
      </div>
      <div className='city-content'>
        <h3>{title}</h3>
        <div>
          <i className='ion-ios-people'></i>
          <p>{users}+ happy users</p>
        </div>
        <div>
          <i className='ion-playstation'></i>
          <p>{pgamers}+ top gamers</p>
        </div>
        <div>
          <i className='ion-xbox'></i>
          <p>{xgamers}+ top gamers</p>
        </div>
        <div>
          <i className='ion-social-twitter'></i>
          <p>
            <a href='#'>{twitter}</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CityItem
