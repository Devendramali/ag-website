import React, { useEffect,useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import g1 from "../../assets/img/gallery/1.png"
import g2 from "../../assets/img/gallery/2.jpg"
import g3 from "../../assets/img/gallery/3.png"
import g4 from "../../assets/img/gallery/4.png"
import logo1 from "../../assets/img/logos/anuved.png"
import logo2 from "../../assets/img/logos/bharat.png"
import logo3 from "../../assets/img/logos/bnl.jpg"
import logo4 from "../../assets/img/logos/sg.png"
import logo5 from "../../assets/img/logos/soupherb.png"

const Gallery = () => {

  const sliderRef = useRef(null)
  const sectionRef = useRef(null)

useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger)

  const slider = sliderRef.current
  const section = sectionRef.current

  const totalWidth = slider.scrollWidth
  const scrollAmount = totalWidth - window.innerWidth

  const tween = gsap.to(slider, {
    x: -scrollAmount,
    ease: "none",
    scrollTrigger: {
       trigger: section,
      start: "15% top",
      end: () => "+=" + scrollAmount,
      scrub: 1,
      pin: true,
      pinSpacing: true, // 👈 MUST
      anticipatePin: 1,
      invalidateOnRefresh: true,
    }
  })

  return () => {
    tween.scrollTrigger.kill()
    tween.kill()
  }

}, [])

 useEffect(() => {
  const cursor = document.querySelector(".custom-cursor")
  const cards = document.querySelectorAll(".card")

  const moveCursor = (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"
  }

  const showCursor = () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)"
  }

  const hideCursor = () => {
    cursor.style.transform = "translate(-50%, -50%) scale(0)"
  }

  window.addEventListener("mousemove", moveCursor)

  cards.forEach((card) => {
    card.addEventListener("mouseenter", showCursor)
    card.addEventListener("mouseleave", hideCursor)
  })

  return () => {
    window.removeEventListener("mousemove", moveCursor)
  }
}, [])

  return (
   <>
   <div className='gallery' ref={sectionRef}>

  <div className="inner">
    <div className="container">
    <h2 className='heading'>Gallery</h2>
      
    </div>


    <div className="scrollslider">
      <div className="slider" ref={sliderRef}>

        <div className="card">
            <figure className="logocadr">
              <img src={logo1} />
            </figure>
            <figure className="mainimg">
              <img src={g1} />
            </figure>
          </div>
        <div className="card">
            <figure className="logocadr">
              <img src={logo2} />
            </figure>
            <figure className="mainimg">
              <img src={g2} />
            </figure>
          </div>
        <div className="card">
            <figure className="logocadr">
              <img src={logo3} />
            </figure>
            <figure className="mainimg">
              <img src={g3} />
            </figure>
          </div>
        <div className="card">
            <figure className="logocadr">
              <img src={logo4} />
            </figure>
            <figure className="mainimg">
              <img src={g4} />
            </figure>
          </div>
        <div className="card">
            <figure className="logocadr">
              <img src={logo5} />
            </figure>
            <figure className="mainimg">
              <img src={g1} />
            </figure>
          </div>
        <div className="card">
            <figure className="logocadr">
              <img src={logo1} />
            </figure>
            <figure className="mainimg">
              <img src={g2} />
            </figure>
          </div>

      </div>
    </div>

  </div>

</div>  
<div className="custom-cursor dark">
  <h3>Swipe</h3>
</div></> 
  )
}

export default Gallery