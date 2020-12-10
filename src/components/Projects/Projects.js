import React from 'react'

const Projects = ({projects, title}) => {
  console.log(projects)
  return (
    <div>
      {title}
      <img src={projects[0].media.publicURL} alt="projectGif" />
    </div>
  )
}

export default Projects
