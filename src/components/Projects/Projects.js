import React from "react"

import Project from "../Project/Project";

const Projects = ({ projects, title }) => {
  return (
    <div>
      {title}
      <div style={styles.container}>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex"
  }
}

export default Projects
