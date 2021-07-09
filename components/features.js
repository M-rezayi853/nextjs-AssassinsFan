import React from 'react'

import FeatureItem from './feature-item'

const FEATURE_DATA = [
  {
    id: 'f1',
    icon: 'ion-ios-analytics-outline',
    title: 'TRAVEL TO ANCIENT',
    text: 'From lush vibrant forests to volcanic islands and bustling cities, start a journey of exploration and encounters in a war torn world shaped by gods and men.'
  },
  {
    id: 'f2',
    icon: 'ion-ios-game-controller-b-outline',
    title: 'FIGHT ON A NEW SCALE',
    text: 'Demonstrate your warrior\'s abilities in large scale epic battles with enemes featuring hundreds of soldiers, or ram and cleave your way through entire fleets in naval battles across the Sea.'
  },
  {
    id: 'f3',
    icon: 'ion-ios-copy-outline',
    title: 'FORGE YOUR LEGEND',
    text: 'Your decisions will impact how your assassin\'s unfolds. Play through multiple endings thanks to the new dialogue system and the choices you make. Customize your special abilities to become a legend.'
  },
  {
    id: 'f4',
    icon: 'ion-ios-gear-outline',
    title: 'GAZE IN WONDER',
    text: 'The Extended View feature gives you a broader perspective of the environment, and the Dynamic Light and Sun Effects immerse you in the sandy dunes according to where you set your sights.'
  },
]

function Feature() {
  return (
    <section
      className='section-feature js--section-feature js--wp--1'
      id='feature-id'
    >
      <div className='row'>
        <div className='feature-title'>
          <h2>Choose your fate &mdash; in Assassin&apos;s Creed</h2>
          <p>
            From outcast to living legend, embark on an assassin&apos;s to uncover
            the secrets of your past and change the fate of Ancient places.
          </p>
        </div>
      </div>

      <div className='row'>
        {FEATURE_DATA.map(feature => (
          <FeatureItem key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  )
}

export default Feature
