import React from "react"
import clsx from "clsx";
import { Link } from "gatsby"

import styles from "./Hero.module.css";

import SocialLinks from "../../constants/socialLinks"

const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className={clsx("sectionCenter", styles.heroCenter)}>
        <article className={styles.heroInfo}>
          <div>
            <div className={styles.underline}></div>
            <h1 style={{color: "var(--clr-secondary-1"}}>Kevin <span style={{color: "var(--clr-primary-7)"}}>Luo</span></h1>
            <h3>Fullstack Web Developer</h3>
            <Link to="projects" className={styles.btn}>View Work</Link>
            <SocialLinks styles={styles.heroIcons}/>
          </div>
        </article>
      </div>
    </header>
  )
}

export default Hero
