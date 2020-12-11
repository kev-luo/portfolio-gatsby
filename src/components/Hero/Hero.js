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
            <h1 style={{color: "#381D57"}}>Kevin <span style={{color: "#09531F"}}>Luo</span></h1>
            <h4>Fullstack Web Developer</h4>
            <Link to="contact" className={styles.btn}>Contact me</Link>
            <SocialLinks styles={styles.heroIcons}/>
          </div>
        </article>
      </div>
    </header>
  )
}

export default Hero
