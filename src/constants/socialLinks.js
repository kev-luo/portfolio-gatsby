import React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin></FaLinkedin>,
    url: "https://www.linkedin.com/in/kevinluo49/",
  },
  {
    id: 2,
    icon: <FaGithub></FaGithub>,
    url: "https://github.com/kev-luo",
  },
]

export default ({ styles }) => {
  return (
    <ul className={styles ? styles : ""}>
      {data.map(link => (
        <li key={link.id}>
          <a href={link.url} target="_blank" rel="noreferrer">
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
