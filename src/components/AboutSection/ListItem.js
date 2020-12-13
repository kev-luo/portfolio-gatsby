import React from "react"

import { Item, Border } from "./Styled";

export default function ListItem({ content }) {
  return (
    <Item>
      {content}
      <Border/>
    </Item>
  )
}
