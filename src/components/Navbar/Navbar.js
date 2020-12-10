import React from "react"
import { FaAlignRight } from "react-icons/fa"

import styles from "./Navbar.module.css";
import Links from "../../constants/links"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          KEVIN LUO
          <button className={styles.toggle}>
            <FaAlignRight />
          </button>
        </div>
        <Links style={styles.navLinks}/>
      </div>
    </nav>
  )
}

export default Navbar
