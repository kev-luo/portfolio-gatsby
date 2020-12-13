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
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const Card = styled.div`
  /* border: 1px solid white; */
  padding: 3em;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    background: var(--clr-grey-4);
    top: 0;
    left: 0;
    height: 100%;
    width: 20%;
    z-index: -7;
  }
  &:after {
    content: '';
    position: absolute;
    background: white;
    width: 0%;
    height: 100%;
    background: green;
    right: 0;
    top: 0;
    z-index: -6;
  }
`

export const ListTitle = styled.h3`

`

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 1.5em 0 0 3em;
  position: relative;

  `

export const Item = styled.li`
  flex: 1 1 auto;
  margin-right: .5rem;
  clip-path: circle(0% at 100% 0);
  &:before {
    content: "";
    position: absolute;
    height: 80%;
    width: 4px;
    background: darkblue;
    left: 0;
    top: 1.6em;
  }
`

