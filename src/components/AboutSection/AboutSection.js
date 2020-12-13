import React from "react"

import { ContentContainer, List } from "./Styled";
import ListItem from "./ListItem";

export default function AboutSection({about}) {
  console.log(about);
  return (
    <ContentContainer>
      <h3>Eduction</h3>
      <List>
        {about.education.map(item => (
          <ListItem key={item.id} content={item.name} />
        ))}
      </List>
      <h3>Skills/Tech</h3>
      <List>
        {about.stack.map(item => (
          <ListItem key={item.id} content={item.name} />
        ))}
      </List>
      <h3>Hobbies</h3>
      <List>
        {about.hobbies.map(item => (
          <ListItem key={item.id} content={item.name} />
        ))}
      </List>
    </ContentContainer>
  )
}
