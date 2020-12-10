import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 1,
    text: "contact",
    url: "/contact/",
  },
  {
    id: 1,
    text: "projects",
    url: "/projects/",
  },
]

export default ({ style }) => {
  return (
    <ul className={`${style ? style : ""}`}>
      {data.map(link => (
        <li key={link.id}>
          <Link to={link.url}>{link.text}</Link>
        </li>
      ))}
    </ul>
  )
}
