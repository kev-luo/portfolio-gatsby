import React from 'react'
import Image from "gatsby-image"

const Project = ({ project }) => {
  return (
    <div style={styles.container}>
      <Image
          fluid={project.media.childImageSharp.fluid}
          alt="projectGif"
      />
    </div>
  )
}

const styles = {
  container: {
    width: "500px",
    height: "500px",
  }
}

export default Project
