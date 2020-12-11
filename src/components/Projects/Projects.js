import React from "react"

import Project from "../Project/Project";

const Projects = ({ projects, title }) => {
  return (
    <div>
      <h2 style={styles.title}>{title}</h2>
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
    display: "flex",
  },
  title: {
    textAlign: "center"
  }
}

export default Projects
