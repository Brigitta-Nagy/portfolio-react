import React from 'react'
import NavLinks from './NavLinks'
import {RiMenu5Line} from "react-icons/ri"
import {RiCloseLine} from "react-icons/ri"
import {useState} from 'react'
import styles from './Navbar.module.css'



function HamburgerMenu() {

  const[open, setOpen]= useState(false); 
  
  
  const hamburgerIcon =  <RiMenu5Line className={styles.hamburger}
                         onClick={()=> setOpen(!open)}/>

  const closeIcon =  <RiCloseLine className={styles.hamburger}
                      onClick={()=> setOpen(!open)}/>                     

  const closeMobileMenu = ()=> setOpen(false); 


  return ( 
    <>
    <div className={`${styles.hamburgerMenu} ${styles.headerContainer}`}>
   
    <h1 className={styles.logo}
    // drag
    // dragConstraints={{left:0, top:0, right: 0, bottom: 0}}
    // dragElastic={0.8}
    >B N</h1>
   
    {open? closeIcon : hamburgerIcon}
    {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
    </div>
    </>
  )
}

export default HamburgerMenu