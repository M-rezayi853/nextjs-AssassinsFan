import React from 'react'

function FeatureItem({ icon, title, text }) {
  return (
    <div className='col span-1-of-4 feature-box span2of4'>
      <i className={`${icon}`}></i>
      <h3>{title}</h3>
      <p>
        {text}
      </p>
    </div>
  )
}

export default FeatureItem
