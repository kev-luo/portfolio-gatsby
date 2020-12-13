import React from "react"
import { FaShareSquare, FaGithub } from "react-icons/fa"
import { useSpring } from "react-spring"

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
  const { description, media, name, stack, repo, url, left } = project
  const imgProps = useSpring({
    opacity: 1,
    height: 400,
    from: { opacity: 0, height: 0},
    config: {
      tension: 500,
      friction: 100,
      mass: 5,
    }
  })
  const infoProps = useSpring({
    to: [
      { opacity: 1 },
      { transform: "translate(0px)", backdropFilter: "blur(90px)" },
    ],
    from: {
      opacity: 0,
      transform: left ? "translate(-30%)" : "translate(30%)",
      backdropFilter: "blur(0px)",
    },
    delay: 800,
    config: {
      tension: 180,
      friction: 25,
      clamp: true
    },
  })
  console.log(infoProps)
  return (
    <ProjectContainer>
      <ProjectImg
        style={imgProps}
        fluid={media.childImageSharp.fluid}
        alt="projectGif"
      />
      <ProjectInfo style={infoProps}>
        <ProjectTitle>{name}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectStack>
          {stack.map(item => (
            <span key={item.id}>{item.name}</span>
          ))}
        </ProjectStack>
        <ProjectLinks>
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="socialLink"
          >
            <FaGithub />
          </a>
          <a href={url} target="_blank" rel="noreferrer" className="socialLink">
            <FaShareSquare />
          </a>
        </ProjectLinks>
      </ProjectInfo>
    </ProjectContainer>
  )
}

export default Project
