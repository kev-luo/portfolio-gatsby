import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const ProjectContainer = styled.div`
  display: grid;
  margin-bottom: 4rem;
  align-items: center;
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
  }
`

export const ProjectImg = styled(BackgroundImage)`
  @media screen and (min-width: 992px) {
    height: 30rem;
    grid-area: 1/1/1 / span 8;
  }
`

export const ProjectInfo = styled.div`
  background: var(--clr-white);
  padding: 1rem 2rem;
  @media screen and (min-width: 992px) {
    grid-area: 1/5/1/12;
    z-index: 1;
  }
`

export const ProjectTitle = styled.h3`
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: .75rem;
`

export const ProjectDescription = styled.p`
  margin-bottom: .75rem;
`
export const ProjectStack = styled.div`
  span {
    display: inline-block;
    margin: .25rem .5rem .25rem 0;
    padding: .25rem .5rem;
    background: var(--clr-bg-1);
    letter-spacing: .1rem;
    text-transform: uppercase;
    font-size: 0.85rem;
    color: var(--clr-secondary-1);
    border-radius: 5px;
  }
`
export const ProjectLinks = styled.div`
  margin-top: .75rem;
  a {
    font-size: 1.2rem;
  }
`
