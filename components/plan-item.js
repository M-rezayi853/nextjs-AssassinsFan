import React from 'react'

function PlanItem({ type, totalPrice, priceGame, options, btnFull }) {
  return (
    <div className='col span-1-of-3 plan-box js--wp--3'>
      <div className='plan-top'>
        <h3>{type}</h3>
        <p>
          {totalPrice}$<span>/ month</span>
        </p>
        <p>That&apos;s only {priceGame}$ per game</p>
      </div>
      <div className='plan-middle'>
        <ul>
          <li>
            <i className={`${options.iconOne}`}></i>{options.itemOne}
          </li>
          <li>
            <i className={`${options.iconTwo}`}></i>{options.itemTwo}
          </li>
          <li>
            <i className={`${options.iconTree}`}></i>{options.itemTree}
            creations
          </li>
          <li>
            <i className={`${options.iconFour}`}></i>{options.itemFour}
          </li>
        </ul>
      </div>
      <div className='plan-end'>
        <a className={`btn ${btnFull}`} href='#'>
          Sign up now
        </a>
      </div>
    </div>
  )
}

export default PlanItem
