import React from 'react'
import '../styles/Projects.css'
import Proje1 from '../assets/img/proje1.png'
import Proje2 from '../assets/img/proje2.png'
import Proje3 from '../assets/img/proje3.png'

function Projects() {
  return (
    <div className='projects'>
      <div className='blog_box'>
        <div className='blog_box_img'><img src={Proje1} alt="" /></div>
      <div className='blog_box_text'>
        <h1>Project 1</h1>
        <h3>Figma</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, totam!</p>
      </div>
      </div>
      <div className='blog_box'>
        <div className='blog_box_img'><img src={Proje2} alt="" /></div>
      <div className='blog_box_text'>
        <h1>Project 1</h1>
        <h3>Figma</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, totam!</p>
      </div>
      </div>
      <div className='blog_box'>
        <div className='blog_box_img'><img src={Proje3} alt="" /></div>
      <div className='blog_box_text'>
        <h1>Project 1</h1>
        <h3>Figma</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, totam!</p>
      </div>
      </div>
    </div>
  )
}

export default Projects
