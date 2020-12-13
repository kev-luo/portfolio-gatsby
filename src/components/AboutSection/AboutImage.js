import React from "react"
import { StyledImg, Overlay } from "./Styled";

export default function AboutImage({fluid}) {
  return (
    <StyledImg fluid={fluid}>
      <Overlay />
    </StyledImg>
  )
}
