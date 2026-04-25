import React, { useEffect, useRef } from 'react'
import ag from "../../assets/img/ag/About.png"
import fream from "../../assets/img/ag/frame.png"

const Brandfream = () => {

  const sectionRef = useRef(null)
  const frameRef = useRef(null)
  const imgRef = useRef(null)
  const paraRefs = useRef([])

 useEffect(() => {

  const handleScroll = () => {

    // ❌ STOP animation below 786px
    if (window.innerWidth <= 991) {

      // reset frame
      if (frameRef.current) {
        frameRef.current.classList.remove("show")
      }

      // reset image
      if (imgRef.current) {
        imgRef.current.classList.remove("show")
      }

      // reset paragraphs
      paraRefs.current.forEach((el) => {
        if (!el) return
        el.style.opacity = 1
        el.style.transform = "translateY(0px)"
      })

      return // 🚀 exit (no animation)
    }

    // ✅ NORMAL ANIMATION (only >786px)

    // FRAME animation
    if (frameRef.current) {
      const rect = frameRef.current.getBoundingClientRect()

      if (rect.top <= 100) {
        frameRef.current.classList.add("show")
      } else {
        frameRef.current.classList.remove("show")
      }
    }

    // IMAGE animation
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect()

      if (rect.top <= -100) {
        imgRef.current.classList.add("show")
      } else {
        imgRef.current.classList.remove("show")
      }
    }

    // PARAGRAPHS animation
    paraRefs.current.forEach((el) => {
      if (!el) return
      const rect = el.getBoundingClientRect()

      const start = window.innerHeight * 0.9
      const peak = window.innerHeight * 0.4
      const end = window.innerHeight * 0.1

      let progress = 0

      if (rect.top <= start && rect.top >= end) {
        if (rect.top >= peak) {
          progress = (start - rect.top) / (start - peak)
        } else {
          progress = (rect.top - end) / (peak - end)
        }
      }

      progress = Math.min(Math.max(progress, 0), 1)

      el.style.opacity = progress
      el.style.transform = `translateY(${30 - progress * 30}px)`
    })
  }

  window.addEventListener("scroll", handleScroll)
  handleScroll()

  return () => window.removeEventListener("scroll", handleScroll)

}, [])

  return (
    <div className="agfream mt-0" ref={sectionRef}>

      <h2>The Soul Behind the Brand</h2>

      {/* FRAME */}
      <div className='fream' ref={frameRef}>
        <img src={fream} alt="" />
      </div>

      {/* MAIN IMAGE */}
      <div className='mainimg' ref={imgRef}>
        <img src={ag} alt="" />
      </div>

      {/* CONTENT */}
      <div className="freamcontent">
        <div className="position-relative">

          <p className="para1" ref={el => paraRefs.current[0] = el}>
           When I’m not building, I’m observing — people, silence, stories.
          </p>

          <p className='para2' ref={el => paraRefs.current[1] = el}>
            I find clarity in long drives, in chai over deep conversations, in music that feels like truth.
          </p>

          <p className='para3' ref={el => paraRefs.current[2] = el}>
            I’ve realized success doesn’t come from balance — it comes from alignment.
          </p>

              

        </div>
      </div>

    </div>
  )
}

export default Brandfream