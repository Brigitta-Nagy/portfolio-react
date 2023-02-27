import React from 'react'
import { useEffect, useState } from 'react'
// import ScrollToTop from "react-scroll-to-top"
import {ImArrowUp} from 'react-icons/im'


function ToTop() {

  const [toTop, setToTop]= useState(false)

  useEffect(()=> {
    window.addEventListener("scroll", () => {
      if(window.scrollY> 650){
        setToTop(true)
      } else{
        setToTop(false)
      }
    })
  },[])

  const scrollUp=()=>{
   
    window.scrollTo({
      top:0,
      behavior: "smooth"

    })

  }

  return (
<>

    <div style={{marginTop:"10px"}}>
{/* <ScrollToTop smooth color="#5d4954" backgroundColor="red"/> */}
 {toTop && (
      
      <ImArrowUp onClick={scrollUp}
      style={{position:"fixed", 
              bottom: "10px",
              height: "50px",
              right: "10px",
              fontSize:"35px",
              color:"#5d4954" }}/>
       
    )} 
    </div>

</>

) }

export default ToTop

