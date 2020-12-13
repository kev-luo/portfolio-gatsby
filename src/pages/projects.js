import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import Projects from "../components/Projects/Projects"
import SEO from "../components/SEO"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes },
  } = data
  return (
    <Layout>
      <SEO title="Projects" />
      <Projects projects={nodes} title="Featured Projects" />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        name
        description
        id
        left
        stack {
          name
          id
        }
        featured
        url
        repo
        media {
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
