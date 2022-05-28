import React from 'react'
import ProjectCard from './project-card'
import { ProjectData } from '../../../../Data/mydata'
import './Projects.css'

function Projects() {
  const data=ProjectData;
  return (
    <div className='projects'>
      <div className='big-text'>
        Projects
      </div>
      <div>
        {data.map((project)=>{
          return(
            <React.Fragment key={project.id}>
            <ProjectCard project={project}/>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  )
}

export default Projects