import React from 'react'
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout";
import Projects from "../components/Projects/Projects"

export default ({ data }) => {
  const { allStrapiProjects: { nodes } } = data;
  return (
    <Layout>
      Projects
      <Projects projects={nodes} title="Featured Projects"/>
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