import React from 'react'
import './About.css'
import Intro from './Intro'
import Summary from './Summary'

function About() {
  return (
    <div className='about'>
        <div className='about-intro'>
            <Intro/>
        </div>
        <div className='about-projects'>
        Projects
        </div>
        <div className='about-summary'>
            <Summary/>
        </div>
    </div>
  )
}

export default About