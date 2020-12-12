import React from "react"

import { StyledPage, SectionCenter, SectionTitle } from "../../styles/Styled"
import Project from "../Project/Project"

const Projects = ({ projects, title }) => {
  return (
    <StyledPage>
      <SectionTitle>{title}</SectionTitle>
      <SectionCenter>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </SectionCenter>
    </StyledPage>
  )
}

const styles = {
  container: {
    display: "flex",
  },
}

export default Projects
