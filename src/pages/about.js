import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import Layout from "../components/Layout/Layout"

const Container = styled.div`
  display: flex;
`
const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`
const StyledImg = styled(BackgroundImage)`
  width: 50vw;
  height: 80vh;
`
const Overlay = styled.div`
  background: radial-gradient(closest-side, transparent, var(--clr-bg-1));
  height: 100%;
`
const ContentContainer = styled.div`
  width: 50vw;
  margin: 0 2rem;
  padding: 0 2rem;
`
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
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
        <Title>{title}</Title>
        <Container>
          <StyledImg fluid={fluid}>
            <Overlay />
          </StyledImg>
          <ContentContainer>
            <div>{content}</div>
            <List>
              {stack.map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
            </List>
          </ContentContainer>
        </Container>
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
