import React, { useState } from "react"
import { useSpring } from "react-spring"

import { ContentContainer, Card, ListTitle, List, Initial, Hidden } from "./Styled"
import ListItem from "./ListItem"

export default function AboutSection({ about }) {
  const [{x, y, z}, set] = useSpring(() => ({ x: 20, y: 20, z: 20}))

  return (
    <ContentContainer>
      <Card onMouseEnter={() => set({ x: 100})} onMouseLeave={() => set({ x: 20})}>
        <ListTitle>Eduction</ListTitle>
        <List>
          {about.education.map(item => (
            <ListItem key={item.id} content={item.name} />
          ))}
        </List>
        <Initial style={{width: x.interpolate(v => `${v}%`)}}/>
        <Hidden />
      </Card>
      <Card onMouseEnter={() => set({ y: 100})} onMouseLeave={() => set({ y: 20})}>
        <ListTitle>Skills/Tech</ListTitle>
        <List>
          {about.stack.map(item => (
            <ListItem key={item.id} content={item.name} />
          ))}
        </List>
        <Initial style={{width: y.interpolate(v => `${v}%`)}}/>
        <Hidden />
      </Card>
      <Card onMouseEnter={() => set({ z: 100})} onMouseLeave={() => set({ z: 20})}>
        <ListTitle>Hobbies</ListTitle>
        <List>
          {about.hobbies.map(item => (
            <ListItem key={item.id} content={item.name} />
          ))}
        </List>
        <Initial style={{width: z.interpolate(v => `${v}%`)}}/>
        <Hidden />
      </Card>
    </ContentContainer>
  )
}
