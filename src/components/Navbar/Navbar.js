import React from "react"
import { FaAlignRight } from "react-icons/fa"

import styles from "./Navbar.module.css";
import Links from "../../constants/links"
import { IconOne, IconTwo } from "../../assets/svg"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <div>
            <div className={styles.logoOne}>
              <IconOne />
            </div>
            <div className={styles.logoTwo}>
              <IconTwo />
            </div>
          </div>
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
