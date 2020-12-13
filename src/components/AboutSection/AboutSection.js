import React from "react"

import { ContentContainer, Card, ListTitle, List } from "./Styled"
import ListItem from "./ListItem"

export default function AboutSection({ about }) {
  return (
    <ContentContainer>
      <Card>
        <ListTitle>Eduction</ListTitle>
        <List>
          {about.education.map(item => (
            <ListItem key={item.id} content={item.name} />
          ))}
        </List>
      </Card>
      <Card>
        <ListTitle>Skills/Tech</ListTitle>
        <List>
          {about.stack.map(item => (
            <ListItem key={item.id} content={item.name} />
          ))}
        </List>
      </Card>
      <Card>
        <ListTitle>Hobbies</ListTitle>
        <List>
          {about.hobbies.map(item => (
            <ListItem key={item.id} content={item.name} />
          ))}
        </List>
      </Card>
    </ContentContainer>
  )
}
