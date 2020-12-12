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
  margin-bottom: 2rem;
  li {
    margin-bottom: 1rem;
  }
`
const EdItem = styled.li`
`
const Item = styled.li`
  margin-right: .5rem;
`
const SectionTitle = styled.h3`
`

const About = ({ data }) => {
  const {
    allStrapiAbout: { nodes },
  } = data
  const {
    stack,
    education,
    hobbies,
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
            <SectionTitle>Education</SectionTitle>
            <List>
              {education.map(item => (
                <EdItem key={item.id}>{item.name}</EdItem>
              ))}
            </List>
            <SectionTitle>Skills</SectionTitle>
            <List>
              {stack.map(item => (
                <Item key={item.id}>{item.name}</Item>
              ))}
            </List>
            <SectionTitle>Hobbies</SectionTitle>
            <List>
              {hobbies.map(item => (
                <Item key={item.id}>{item.name}</Item>
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

export default About
