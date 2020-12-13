import React from "react"

import { Container } from "./Styled"
import AboutImage from "./AboutImage"
import AboutSection from "./AboutSection"

export default function Content({ about }) {
  const {
    image: {
      childImageSharp: { fluid },
    },
  } = about
  return (
    <Container>
      <AboutImage fluid={fluid} />
      <AboutSection about={about} />
    </Container>
  )
}
