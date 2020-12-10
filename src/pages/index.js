import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout";
import Projects from "../components/Projects/Projects"
import Hero from "../components/Hero/Hero"
import "../main.css"

export default ({ data }) => {
  const { allStrapiProjects: { nodes } } = data;
  return (
    <>
      <Layout>
        <Hero />
        <Projects projects={nodes} title="Featured Projects"/>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        name
        description
        id
        featured
        url
        repo
        media {
          publicURL
        }
        stack {
          name
          id
        }
      }
    }
  }
`
