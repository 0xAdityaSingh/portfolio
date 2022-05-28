import React from 'react'
import './Intro.css'
function Intro() {
  return (
      <div className='myintro'>
          <div className='mytext'>
            <div className='big-text'>
                I'm a Software developer who builds immersive and user-friendly applications.
                <div className='small-text'>
                Find me on <a href="https://twitter.com/c9addy" target="_blank">Twitter</a> / <a href="https://github.com/c9addy" target="_blank">GitHub</a> / <a href="https://www.linkedin.com/in/c9addy/" target="_blank">LinkedIn</a> , <br/>or just <a href="mailto:singh.aditya44@gmail.com">send me an email</a> saying hi.
                </div>
            </div>
            
        </div>
        <div className='myimg'>
            <img src={require('./imgs.png')}/>
        </div>
    </div>
  )
}

export default Intro