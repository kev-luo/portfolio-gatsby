import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components";

import Layout from "../components/Layout/Layout"

const StyledImg = styled(BackgroundImage)`
  width: 60vw;
  height: 80vh;
`
const Overlay = styled.div`
  background: radial-gradient(closest-side, transparent, var(--clr-bg-1));
  height: 100%;
`

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
        <div style={{display: "flex"}}>
          <StyledImg
            fluid={fluid}
          >
            <Overlay />
          </StyledImg>
          <div>{content}</div>
          <ul>
            {stack.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
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
