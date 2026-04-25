import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const LeftRightText = () => {

  const containerRef = useRef(null)

  useEffect(() => {

    const el = containerRef.current
    if (!el) return

    const headings = el.querySelectorAll("h2")

    // 👉 FIRST H2 (from LEFT)
    gsap.fromTo(
      headings[0],
      {
        x: -200,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headings[0],
          start: "top 45%",
         toggleActions: "play reverse play reverse",
          markers: false     // 👉 make true for debug
        }
      }
    )

    // 👉 SECOND H2 (from RIGHT)
    gsap.fromTo(
      headings[1],
      {
        x: 200,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headings[1],
          start: "top 45%",
          toggleActions: "play reverse play reverse",
          markers: false
        }
      }
    )

    // 👉 cleanup (important)
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }

  }, [])

  return (
    <div className='leftrighttext' ref={containerRef}>
      <h2>The stronger the soul</h2>
      <h2>the stronger the brand</h2>
    </div>
  )
}

export default LeftRightText