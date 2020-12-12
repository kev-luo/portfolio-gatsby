import React from "react"

import { ProjectContainer, ProjectImg, ProjectInfo } from "./Styled"

const Project = ({ project }) => {
  const { description, media, name } = project
  return (
    <ProjectContainer>
      <ProjectImg fluid={media.childImageSharp.fluid} alt="projectGif" />
      <ProjectInfo>
        <h3>{name}</h3>
        <p>{description}</p>
      </ProjectInfo>
    </ProjectContainer>
  )
}

export default Project
