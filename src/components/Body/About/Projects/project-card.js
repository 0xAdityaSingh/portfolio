import React from 'react'
import './project-card.css'

function ProjectCard({project}) {
    
  return (
    <div className='prcard'>
        <div className='prinfo'>
            <label className='prtitle'>{project.title}</label>
            <div className='prlinks'>
                {project.github && (
                <a href={project.github} target='_blank' rel="noopener noreferrer">
                  {/* <i class="devicon-github-original"/> */}
                  <div className='prlinkbutton'>
                  Github
                  </div>
                  </a>
                  )}
                  {project.demo && (
                <a href={project.demo} target='_blank' rel="noopener noreferrer">
                  {/* <i class="devicon-chrome-plain"/> */}
                  <div className='prlinkbutton'>
                  Demo  
                  </div>
                  </a>
                  )}
                  {project.video && (
                <a href={project.video} target='_blank' rel="noopener noreferrer">
                  {/* <i class="devicon-chrome-plain"/> */}
                  <div className='prlinkbutton'>
                    Video
                  </div>
                  </a>
                  )}
            </div>
            <p className='prinfo'>{project.about}</p>
            <div className='prtags'>
                    {project.tags.map((tag)=>{
                    return <lable className='prtag'>{tag}</lable>
                    })}
            </div>
        </div>
        <img className='primg' src={project.img} />
    </div>
  )
}

export default ProjectCard