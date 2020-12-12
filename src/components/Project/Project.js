import React from "react"

import {
  ProjectContainer,
  ProjectImg,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  ProjectStack,
  ProjectLinks,
} from "./Styled"

const Project = ({ project }) => {
  const { description, media, name, stack, repo, url } = project
  return (
    <ProjectContainer>
      <ProjectImg fluid={media.childImageSharp.fluid} alt="projectGif" />
      <ProjectInfo>
        <ProjectTitle>{name}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectStack>
          {stack.map(item => (
            <span key={item.id}>{item.name}</span>
          ))}
        </ProjectStack>
        <ProjectLinks>
          <a href={repo} target="_blank" rel="noreferrer">Repo</a>
          <a href={url} target="_blank" rel="noreferrer">Site</a>
        </ProjectLinks>
      </ProjectInfo>
    </ProjectContainer>
  )
}

export default Project
