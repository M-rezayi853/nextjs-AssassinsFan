import React from 'react'

import PlanItem from './plan-item'

const PLAN_DATA = [
  {
    id: 'p1',
    type: 'PREMIUM',
    totalPrice: '399',
    priceGame: '13.30',
    options: {
      iconOne: 'ion-ios-checkmark-empty',
      iconTwo: 'ion-ios-checkmark-empty',
      iconTree: 'ion-ios-checkmark-empty',
      iconFour: 'ion-ios-checkmark-empty',
      itemOne: '1 game every day',
      itemTwo: 'Order 24/7',
      itemTree: 'Access to newest',
      itemFour: 'Free delivery',
    },
    btnFull: 'btn-full'
  },
  {
    id: 'p2',
    type: 'PRO',
    totalPrice: '149',
    priceGame: '14.90',
    options: {
      iconOne: 'ion-ios-checkmark-empty',
      iconTwo: 'ion-ios-checkmark-empty',
      iconTree: 'ion-ios-checkmark-empty',
      iconFour: 'ion-ios-checkmark-empty',
      itemOne: '1 game 10 days/month',
      itemTwo: 'Order 24/7',
      itemTree: 'Access to newest',
      itemFour: 'Free delivery',
    },
    btnFull: 'btn-ghost'
  },
  {
    id: 'p3',
    type: 'STARTER',
    totalPrice: '19',
    priceGame: '3',
    options: {
      iconOne: 'ion-ios-checkmark-empty',
      iconTwo: 'ion-ios-checkmark-empty',
      iconTree: 'ion-ios-close-empty',
      iconFour: 'ion-ios-checkmark-empty',
      itemOne: '1 game 10 days/month',
      itemTwo: 'Order 24/7',
      itemTree: 'Access to newest',
      itemFour: 'Free delivery',
    },
    btnFull: 'btn-ghost'
  },
]

function Plans() {
  return (
    <section className='section-plan' id='sign-up-id'>
      <div className='row'>
        <h2>Start playing Assassin&apos;s Creed today</h2>
      </div>
      <div className='row'>
        {PLAN_DATA.map(plan => (
          <PlanItem key={plan.id} {...plan} />
        ))}
      </div>
    </section>
  )
}

export default Plans
