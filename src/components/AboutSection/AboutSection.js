import React, { useState } from "react"
import { useSpring, useTrail } from "react-spring"

import {
  ContentContainer,
  Card,
  ListTitle,
  List,
  Initial,
  Item,
  Border,
} from "./Styled"

export default function AboutSection({ about }) {
  const [open, setOpen] = useState({ x: false, y: false, z: false })
  const props = useSpring({
    to: { x: open.x ? 100 : 20, y: open.y ? 100 : 20, z: open.z ? 100 : 20 },
    x: 20,
    y: 20,
    z: 20,
  })

  const edTrail = useTrail(about.education.length, {
    x: open.x ? 360 : 0,
    from: { x: 0 },
  })
  const stackTrail = useTrail(about.stack.length, {
    y: open.y ? 360 : 0,
    from: { y: 0 },
    config: {
      tension: 500
    }
  })
  const hobbiesTrail = useTrail(about.hobbies.length, {
    z: open.z ? 360 : 0,
    from: { z: 0 },
  })

  return (
    <ContentContainer>
      <Card
        onMouseEnter={() => setOpen({ ...open, x: !open.x })}
        onMouseLeave={() => setOpen({ ...open, x: !open.x })}
      >
        <ListTitle>Eduction</ListTitle>
        <List>
          {edTrail.map(({ x, ...rest }, index) => (
            <Item
              key={index}
              style={{
                ...rest,
                clipPath: x.interpolate(v => `circle(${v}% at 100% 0)`),
              }}
            >
              {about.education[index].name}
              <Border />
            </Item>
          ))}
        </List>
        <Initial style={{ width: props.x.interpolate(v => `${v}%`) }} />
      </Card>
      <Card
        onMouseEnter={() => setOpen({ ...open, y: !open.y })}
        onMouseLeave={() => setOpen({ ...open, y: !open.y })}
      >
        <ListTitle>Skills/Tech</ListTitle>
        <List>
          {stackTrail.map(({ y, ...rest }, index) => (
            <Item
              key={index}
              style={{
                ...rest,
                clipPath: y.interpolate(v => `circle(${v}% at 100% 0)`),
              }}
            >
              {about.stack[index].name}
              <Border />
            </Item>
          ))}
        </List>
        <Initial style={{ width: props.y.interpolate(v => `${v}%`) }} />
      </Card>
      <Card
        onMouseLeave={() => setOpen({ ...open, z: !open.z })}
        onMouseEnter={() => setOpen({ ...open, z: !open.z })}
      >
        <ListTitle>Hobbies</ListTitle>
        <List>
          {hobbiesTrail.map(({ z, ...rest }, index) => (
            <Item
              key={index}
              style={{
                ...rest,
                clipPath: z.interpolate(v => `circle(${v}% at 100% 0)`),
              }}
            >
              {about.hobbies[index].name}
              <Border />
            </Item>
          ))}
        </List>
        <Initial style={{ width: props.z.interpolate(v => `${v}%`) }} />
      </Card>
    </ContentContainer>
  )
}
