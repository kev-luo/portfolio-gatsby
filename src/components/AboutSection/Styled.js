import styled from "styled-components";
import BackgroundImage from "gatsby-background-image"

export const Container = styled.div`
  display: flex;
`

export const StyledImg = styled(BackgroundImage)`
  width: 50vw;
  height: 80vh;
`

export const Overlay = styled.div`
  background: radial-gradient(closest-side, transparent, var(--clr-bg-1));
  height: 100%;
`

export const ContentContainer = styled.div`
  width: 50vw;
  margin: 0 2rem;
  padding: 0 2rem;
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  `

export const Item = styled.li`
  flex: 1 1 auto;
  margin-right: .5rem;
  margin-bottom: 1rem;
`