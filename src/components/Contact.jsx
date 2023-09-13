import React from 'react'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='contact_box'>
        <h1>Contact Us</h1>
        <div className='contact_box_top'>
          <input placeholder='First name'></input>
          <input placeholder='Last name'></input>
        </div>
        <div className='contact_box_bottom'>
          <input placeholder='Email adress'></input>
          <input placeholder='Phone number'></input>
          <textarea placeholder='Please enter your comment'></textarea>
        </div>
      </div>
    </div>
  )
}

export default Contact