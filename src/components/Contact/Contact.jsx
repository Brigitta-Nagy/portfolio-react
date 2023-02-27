import React from 'react'
import styles from './Contact.module.css'
import place from '../../static/place.png'
import email from '../../static/email.png'
import { useRef, useEffect } from 'react'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {SlSocialLinkedin} from 'react-icons/sl'


function Contact() {
  const formRef = useRef()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_kappa',
      'template_ezv7y5o',
      formRef.current,
      '-8-7xPkgTTwyRE8Sq' ) 
      .then((result) => {
        console.log(result.text);
        setSent(true)
    }, (error) => {
        console.log(error.text);
    });
  }
  useEffect(()=> {
    Aos.init()
  }, [])

  return (
    <section className={styles.contactContainer} id='contact'>
      <div className={styles.contactBackground}></div>
          <h1 className={styles.contact} data-aos='flip-left'> Contact</h1>
        <div className={styles.contactWrapper}>
          <div className={styles.contactDiv}>
            <aside data-aos='zoom-in-up' data-aos-duration='2000' className={styles.contactRight}>
                <p className={styles.description}>
                <h3>Hello! Do you have a project to complete? Let's discuss about it! </h3>
                Always available for freelancing if the right project finds me. 
                </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                <input type='text' placeholder='Name' name='user_name' required/>
                <input type='email' placeholder='Email' name='user_email' required/>
                <input type='text' placeholder='Subject' name='user_subject' required/>
                <textarea rows='5' placeholder='Message' name='user_message' required/>
                <button className={styles.buttonContact}>Submit</button>
                {sent && 'thank you'}
              </form>
            </aside>
          </div>
          
          <div data-aos='zoom-in-up' data-aos-duration='2000' className={styles.contactLeft}>
            <div className={styles.contactDiv}>
                <h2 className={styles.contactTitle}>Get in touch</h2>
                  <div className={styles.info}>
                      <div className={styles.infoItem}>
                        <img src={email} alt="email address" /><h4>brigitta.nagy@bgreat.co.uk</h4>
                      </div>  
                      <div className={styles.infoItem}>
                        <img src={place} alt="" /><h4>Bristol, UK</h4>
                      </div>
                      <div className={styles.infoItem}>
                        <SlSocialLinkedin size={30}/> <a href="https://www.linkedin.com/in/brigitta-nagy-062544140/" target="_blank" rel="noreferrer"  title="link to LinkedIn"><h4>LinkedIn</h4></a>
                      </div>
                  </div>
             </div>
            
          </div>
          
          
        </div>
      
     
    </section>
  )
}

export default Contact