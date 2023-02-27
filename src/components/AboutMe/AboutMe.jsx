import React from 'react'
import styles from './AboutMe.module.css'
import {motion as m} from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CV from '../../static/CV.pdf'

function AboutMe() {
  return (
    <m.section className={styles.about} id='about'>
    < div  className={styles.aboutSection} data-aos='slide-up'>
    <div className={styles.aboutCard} >
      <h1 data-aos='flip-left' data-aos-duration='3000'>About Me</h1>
        <p className={styles.aboutP}> I am a career switcher, I started coding a few years ago after a long career in the care sector.<br/>I have always been interested in IT and I think the internet is the most powerful invention in the world. <br/>
        I'm happy to have got the point in my life where I've started coding  &#9775;. 
        Never too late to start learning something that is a lifelong learning process anyway &#128640;.
        <br></br>
         &#9774;
        <br></br>
        I am Hungarian, although I chose to live in another country more than 10 years ago, but I still prefer sour cream to ketchup on my pasta. &#127837;  </p>

        <button>
          
          <a className={styles.button_link} href={CV} target='blank' alt='CV'>Download CV</a>
          </button>
        </div>
    </div>
    </m.section>
    
  )
}

export default AboutMe