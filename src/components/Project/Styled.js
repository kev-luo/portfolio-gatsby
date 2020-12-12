import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

export const ProjectContainer = styled.div`
  display: grid;
  margin-bottom: 4rem;
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
  }
`

export const ProjectImg = styled(BackgroundImage)`
  @media screen and (min-width: 992px) {
    height: 30rem;
    grid-area: 1/1/1/span 8;
  }
`

export const ProjectInfo = styled.div`
  
`