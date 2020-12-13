import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import { StyledPage, SectionTitle, SectionCenter } from "../styles/Styled"
import Content from "../components/AboutSection/Content";
import SEO from "../components/SEO";

export default ({ data }) => {
  const {
    allStrapiAbout: { nodes },
  } = data

  return (
    <Layout>
      <SEO title="About" content="This is the about page"/>
      <StyledPage>
        <SectionTitle>{nodes[0].title}</SectionTitle>
        <SectionCenter>
          <Content about={nodes[0]} />
        </SectionCenter>
      </StyledPage>
    </Layout>
  )
};

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        id
        title
        stack {
          name
          id
        }
        education {
          name
          id
        }
        hobbies {
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
