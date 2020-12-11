import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/Layout/Layout"

const About = ({ data }) => {
  const {
    allStrapiAbout: { nodes },
  } = data
  const {
    content,
    stack,
    title,
    image: {
      childImageSharp: { fluid },
    },
  } = nodes[0]

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <div style={styles.imgContainer}>
          <Image fluid={fluid} />
        </div>
        <div>{content}</div>
        <ul>
          {stack.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

const styles = {
  imgContainer: {
    width: "500px",
    height: "500px",
  }
}

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        id
        title
        content
        stack {
          name
          id
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
