import React from "react"
import clsx from "clsx";
import Image from "gatsby-image";
import { graphql, useStaticQuery, Link } from "gatsby"

import styles from "./Hero.module.css";

import SocialLinks from "../constants/socialLinks"

const Hero = () => {
  const { file: { childImageSharp: { fluid }}} = useStaticQuery(query);
  return (
    <header className={styles.hero}>
      <div className={clsx(styles.sectionCenter, styles.heroCenter)}>
        <article className={styles.heroInfo}>
          <div>
            <div className={styles.underline}></div>
            <h1>I'm Kevin</h1>
            <h4>Fullstack Web Developer</h4>
            <Link to="contact" className={styles.btn}>Contact me</Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className={styles.heroImg}/>
      </div>
    </header>
  )
}

const query = graphql`
  {
    file(relativePath: { eq: "LinkedInPic_head.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Hero
