import React from 'react'

function Subscription() {
  return (
    <div className='subscription-container'>
      <h1>Join Our Newslatter</h1>
      <p>Signup to be the first to hear about exclusive deals, special offers and upcoming collections</p>
      <div className="email-form">
        <input type="text" placeholder='Enter email for weekly newslatter.'/>
        <button type="submit">Subscribe</button>
      </div>
    </div>
  )
}

export default Subscription
