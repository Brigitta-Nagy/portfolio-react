import React from 'react'
import styles from './Navbar.module.css'

function NavLinks(props) {
  return (
    <ul className={styles.navLinks}>
     
      <li onClick={()=> props.isMobile && props.closeMobileMenu()}><a href="/#about">About Me</a></li>
      <li onClick={()=> props.isMobile && props.closeMobileMenu()}><a href="/#skills">Skills</a></li>
      <li onClick={()=> props.isMobile && props.closeMobileMenu()}><a href="/#projects">Projects</a></li>
      <li onClick={()=> props.isMobile && props.closeMobileMenu()}><a href="/#contact">Contact</a></li>
  </ul>
  )
}

export default NavLinks;