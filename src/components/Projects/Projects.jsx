import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {BsGlobe} from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from './Projects.module.css';

function Projects() {
  return (
    <div id='projects' >
    <h1 className={styles.projects} data-aos='flip-left'>Projects</h1>
    < div className={styles.projects} data-aos='zoom-in'>
      
    <div className={styles.project_card} >
      <div className={`${styles.project_img} ${styles.project_img1}`}>
      </div>
        <div className={styles.project_content_wrapper}>
            <div>
              <div className={styles.project_title}>
              Weather application
              <div className={styles.project_tech}>JS &#x2218; HTML &#x2218; CSS &#x2218; JQUERY</div>
            </div>
            <div className={styles.project_description}>
              Front-end application allows you to get weather information in real time in your searched city. Temperature is displayed in Celsius or Farenheit as you wish by clicking the button. 
              The background image  changes depends on the weather 
            </div >
            <div className={styles.iconsContainer}>
              <a href="https://github.com/Brigitta-Nagy/weather-app" target="_blank" rel="noreferrer" title="link to Github page">
                <FaGithub size={25}  />
              </a> 
              <a href="https://brigitta-nagy.github.io/weather-app/" target="_blank" rel="noreferrer" title="link to project page">
                <BsGlobe size={25} />
              </a>
            </div>
          </div>
      </div>
    </div>

    <div className={styles.project_card} data-aos='zoom-in'>
      <div className={`${styles.project_img} ${styles.project_img2}` }>
       
      </div>
        <div className={styles.project_content_wrapper}>
            
              <div className={styles.project_title}>
              Restaurant page
              <div className={styles.project_tech}>HTML &#x2218; CSS &#x2218;  SASS</div>
            </div>
            <div className={styles.project_description}>
              This webpage was created according to mockup, with various type of animation. Each card leads to different pages where the menu slide up, the heart and buttons scale up. 
            </div>
            <div className={styles.iconsContainer}>
              <a href="https://github.com/Brigitta-Nagy/MyFood-project2" target="_blank" rel="noreferrer" title="link to Github page">
                <FaGithub size={25} />
              </a> 
              <a href="https://magnificent-pasca-45108c.netlify.app/" target="_blank" rel="noreferrer" title="link to project page">
                <BsGlobe size={25} />
              </a>
            </div>
          
      </div>
    </div>
    <div className={styles.project_card} id='projects'>
      <div className={`${styles.project_img} ${styles.project_img3}` }>
       
      </div>
        <div className={styles.project_content_wrapper}>
            <div>
              <div className={styles.project_title}>
              Meeting application
              <div className={styles.project_tech}>REACT &#128526; BOOTSTRAP 	&#x2218; NODEJS &#x2218; MONGODB</div>
            </div>
            <div className={styles.project_description}>
              This app allows the user to sign in and see a list of events, they can join or un-join these events or create an event of their own which other user can then see and join. Using CRUD, authorization, authentication.
            </div>
          </div>
          <div className={styles.iconsContainer}>
              <a href="https://github.com/Brigitta-Nagy/Meet-App-Mern" target="_blank" rel="noreferrer" title="link to Github page">
                <FaGithub size={25} />
              </a> 
              <a href="" rel="noreferrer" target="_blank" title="link to project page">
                <BsGlobe size={25} />
              </a>
              </div>
      </div>
    </div>
    <div className={styles.project_card} id='projects'>
      <div className={`${styles.project_img} ${styles.project_img4}` }>
       
      </div>
        <div className={styles.project_content_wrapper}>
            <div>
              <div className={styles.project_title}>
              To-do app
              <div className={styles.project_tech}>REACT &#x2218; HTML &#x2218; CSS &#x2218; JQUERY</div>
            </div>
            <div className={styles.project_description}>
              This React to-do App allows the user to add items to the to-do list, they can also edit or delete these items or mark them as complete.
            </div>
          </div>
          <div className={styles.iconsContainer}>
              <a href="https://github.com/Brigitta-Nagy/todo-list-react" target="_blank" rel="noreferrer" title="link to Github page">
                <FaGithub size={25} />
              </a> 
              <a href="https://resonant-pasca-16ce58.netlify.app/" rel="noreferrer" target="_blank" title="link to project page">
                <BsGlobe size={25} />
              </a>
          </div>
      </div>
    </div>
    </div>

    </div>
  )
}


export default Projects

