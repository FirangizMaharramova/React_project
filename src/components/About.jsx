import React from 'react'
import '../styles/About.css'
import People from '../pages/aboutus.png'

function About() {
  return (
    <div className='about'>
      <div className='about_left'><img src={People} alt="" /></div>
      <div className='about_right'>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, sed. Aliquid corporis quis tenetur dignissimos eius alias ipsa, dolor consequatur!</p>
      <button>Learn more</button>
      </div>
    </div>
  )
}

export default About