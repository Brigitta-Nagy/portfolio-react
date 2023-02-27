import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (

    <div className={styles.footerContainer}>Created by Brigitta Nagy<br></br>
    copyright &copy; 2022
    <a href="https://www.flaticon.com/free-icons/email" title="email icons">Icons created by Freepik - Flaticon</a>
    <p> photos from pexels.com<br/> thanks to pixabay, julien-brion, junior-teixeira, 
    lisa-fotios, markus-spiske and cottonbro-studio</p>
    </div>
  )
}

export default Footer