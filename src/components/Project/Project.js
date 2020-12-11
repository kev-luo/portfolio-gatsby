import React from 'react'
import Image from "gatsby-image"

const Project = ({ project }) => {
  const { description, media, name } = project;
  return (
    <div style={styles.container}>
      <h3>{name}</h3>
      <Image
          fluid={media.childImageSharp.fluid}
          alt="projectGif"
      />
      <p>{description}</p>
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
