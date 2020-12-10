import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Projects from "../components/Projects"
import Hero from "../components/Hero"
import "../main.css"

export default ({ data }) => {
  console.log(data);
  return (
    <>
      <Layout>
        <Hero />
        <Projects />
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
          relativePath
        }
        stack {
          name
          id
        }
      }
    }
  }
`
