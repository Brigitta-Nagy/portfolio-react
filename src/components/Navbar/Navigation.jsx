import React from 'react'
import NavLinks from './NavLinks'
import styles from './Navbar.module.css'
import {motion as m} from 'framer-motion'


function Navigation() {
  return (
    <>
      <div className={`${styles.navigation} ${styles.headerContainer}`}>
        
        <m.h1 className={styles.logo}
        drag
        dragConstraints={{left:0, top:0, right: 0, bottom: 0}}
        dragElastic={0.8}>BN</m.h1>
        <NavLinks/>
        
      </div>


    </>
    

  )
}

export default Navigation