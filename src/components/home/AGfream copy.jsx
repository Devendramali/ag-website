import React, { useEffect, useRef, useState } from 'react'
import ag from "../../assets/img/ag/ag.jpg"
import fream from "../../assets/img/ag/frame.png"

const AGfream = () => {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()

      // when top touches viewport top
      if (rect.top <= 0) {
        setActive(true)
      } else {
        setActive(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // run once

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`agfream ${active ? "active" : ""}`} >
      
      

      <h2>Behind every strategy, there’s a story.</h2>

      <div className='fream'>
        <img src={fream} alt="" />
      </div>
      <div className='mainimg' ref={sectionRef}>
        <img src={ag} alt="" />
      </div>
      <div className="freamcontent">
        <div className="position-relative">
          <p className="para1">
            10+ Years of Building Across Sectors — From local entrepreneurs to legacy institutions
          </p>

          <p className='para2'>
            Founder DiigiiHost <br />
            Creator The Brand Soul Philosophy
          </p>

          <p className='para3'>
            Mission: Building Bharat Through Brand, Tech & Soul
          </p>

               <a href="#!" className='readmore'>Read More <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="24" fill="white" fill-opacity="0.15"/>
          <path d="M19 19H29M29 19V29M29 19L19 29" stroke="white" stroke-width="1.6" stroke-linecap="square"/>
          </svg></a>
        </div>
      </div>

    </div>
  )
}

export default AGfream