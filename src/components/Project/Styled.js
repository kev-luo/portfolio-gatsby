import styled from "styled-components"
import { animated } from "react-spring";
import BackgroundImage from "gatsby-background-image"

export const ProjectImg = styled(animated(BackgroundImage))`
  @media screen and (min-width: 992px) {
    height: 30rem;
    grid-area: 1/1/1 / span 8;
  }
`

export const ProjectInfo = styled(animated.div)`
  background: rgba(0,0,0,0.2);
  padding: 1rem 2rem;
  backdrop-filter: blur(90px);
  border: solid 2px transparent;
  background-clip: padding-box;
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, .03);
  @media screen and (min-width: 992px) {
    grid-area: 1/5/1/12;
    z-index: 1;
  }
`

export const ProjectContainer = styled.div`
  display: grid;
  margin-bottom: 4rem;
  align-items: center;
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    &:nth-of-type(2n) ${ProjectImg} {
      grid-area: 1/5/1/-1;
    }
    &:nth-of-type(2n) ${ProjectInfo} {
      grid-area: 1/2/1 / span 7;
    }
  }
`

export const ProjectTitle = styled.h3`
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
`

export const ProjectDescription = styled.p`
  margin-bottom: 0.75rem;
`

export const ProjectStack = styled.div`
  span {
    display: inline-block;
    margin: 0.25rem 0.5rem 0.25rem 0;
    padding: 0.25rem 0.5rem;
    background: var(--clr-grey-8);
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    font-size: 0.85rem;
    color: var(--clr-secondary-1);
    border-radius: 5px;
  }
`

export const ProjectLinks = styled.div`
  margin-top: 0.75rem;
  a {
    font-size: 1.2rem;
  }
`