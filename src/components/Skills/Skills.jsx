import { useEffect} from 'react'
import styles from './Skills.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Javascript_logo from '../../static/Javascript01.png'
import CSS from '../../static/CSS.png'
import React_logo from '../../static/React_logo.png'
import HTML from '../../static/HTML.png'
import NodeJs from '../../static/NodeJs.png'
import JQuery_logo from '../../static/Jquery01.png'
import Bootstrap_logo from '../../static/Bootstrap01.png'
import Sass_logo from '../../static/Sass01.png'
import Express_logo from '../../static/Express01.png'
import Mongodb_logo from '../../static/Mongodb01.png'






function Skills() {
  useEffect(()=> {
    Aos.init({duration: 3000})
  }, [])
  return (
    <>
      <section className={styles.container} id='skills'>
        <div className={styles.skillsBackground}></div>
          <div className={styles.skillsIntro}>
            <h1 className={styles.skills} data-aos='flip-left'> Skills</h1>
            <h2 data-aos='slide-down'> My goal is to learn something every day <br/>that will make me a better developer.</h2>
            <h3 data-aos='slide-down'>I've already used these skills for my projects and <br/>I'm learning them all the time</h3>
          </div>
      
        <div className={styles.logo_wrapper}>
          
              <div data-aos='fade-right' className={styles.logo_container}>
                 <p className={styles.title} > &lt; Frontend /&gt; </p>
                    <div className={styles.frontend_logo_container}>
                      <div className={styles.logo}> <img  src={HTML} alt="" />
                        <p>HTML</p>
                      </div>
                      <div className={styles.logo}> <img src={CSS} alt="" />
                        <p>CSS</p>
                      </div>
                      <div className={styles.logo}> <img src={React_logo} alt="" />
                        <p>React</p>
                      </div>
                      <div className={styles.logo}> <img  src={Javascript_logo} alt="" />
                        <p>JavaScript</p>
                      </div>
                      <div className={styles.logo}> <img  src={JQuery_logo} alt="" />
                        <p>jQuery</p>
                      </div>
                      <div className={styles.logo}>  <img src={Bootstrap_logo} alt="" />
                        <p>Bootstrap</p>
                      </div>
                      <div className={styles.logo}> <img  src={Sass_logo} alt="" />
                        <p>Sass</p>
                      </div>
                    </div> 
              </div>

              <div data-aos='fade-left' className={styles.logo_container}
             
              >
                <p className={styles.title}> &lt; Backend  /&gt; </p>
                  <div className={styles.backend_logo_container}>
                    <div className={styles.logo}> <img  src={NodeJs} alt="" />
                        <p>Node js</p>
                      </div>
                      <div className={styles.logo}> <img  src={Express_logo} alt="" />
                        <p>Express</p>
                      </div>
                      <div className={styles.logo}> <img src={Mongodb_logo} alt="" />
                        <p>MongoDb</p>
                      </div>
                  </div>
              </div>


          
        </div>
        {/* <div>
          <h3>These skills I'm on recent project</h3>
          <div className={styles.logo_container}>
            
            <div className={styles.current_logo_container}>php, sql
            </div>
            </div>
      </div> */}
        </section>
    </>
  )
}

export default Skills