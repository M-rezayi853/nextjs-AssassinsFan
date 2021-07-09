import React from 'react'

function Forms() {
  return (
    <section className='section-form'>
      <div className='row'>
        <h2>WE&apos;RE HAPPY TO HEAR FROM YOU</h2>
      </div>
      <form className='form-box' method='POST' action='#' autoComplete='off'>
        <div className='row'>
          <div className='col span-1-of-3'>
            <label htmlFor='name'>Name</label>
          </div>
          <div className='col span-2-of-3'>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Your Name'
              required
            />
          </div>
        </div>
        <div className='row'>
          <div className='col span-1-of-3'>
            <label htmlFor='email'>Email</label>
          </div>
          <div className='col span-2-of-3'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Your Email'
              required
            />
          </div>
        </div>
        <div className='row'>
          <div className='col span-1-of-3'>
            <label htmlFor='select'>How did you find us?</label>
          </div>
          <div className='col span-2-of-3'>
            <select name='find-us' id='select'>
              <option value='friends'>
                Friends
              </option>
              <option value='serach'>Search ingine</option>
              <option value='addvertisment'>Addvertisment </option>
              <option value='other'>Other</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='col span-1-of-3'>
            <label>Newsletter</label>
          </div>
          <div className='col span-2-of-3'>
            <input type='checkbox' name='checkbox' />
            Yes, please!
          </div>
        </div>
        <div className='row'>
          <div className='col span-1-of-3'>
            <label htmlFor='text'>Drop us a line</label>
          </div>
          <div className='col span-2-of-3'>
            <textarea
              name='drop-line'
              id='text'
              placeholder='Your Message'
              rows='4'
            ></textarea>
          </div>
        </div>
        <div className='row'>
          <div className='col span-1-of-3'>
            <label>&nbsp;</label>
          </div>
          <div className='col span-2-of-3'>
            <input type='submit' value='Send it!' />
          </div>
        </div>
      </form>
    </section>
  )
}

export default Forms
