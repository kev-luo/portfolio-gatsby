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
  const { description, media, name, stack, repo, url } = project
  const imgProps = useSpring({
    to: { opacity: 1, transform: "translate(0px)" },
    from: { opacity: 0, transform: "translate(-50%)" },
  })
  const infoProps = useSpring({
    to: async next => {
      await next({ opacity: 1 })
      await next({ transform: "translate(0px)", backdropFilter: "blur(40px)" })
    },
    from: {
      opacity: 0,
      transform: "translate(-30%)",
      backdropFilter: "blur(0px)",
    },
    delay: 1000
  })
  console.log(infoProps);
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
