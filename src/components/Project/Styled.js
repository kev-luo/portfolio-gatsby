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

`

export const ProjectDescription = styled.p`

`
export const ProjectStack = styled.div`

`
export const ProjectLinks = styled.div`

`
