import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Legacy = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".legasy h2", {
        opacity: 0,
        y: 80,
        stagger: 0.4,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="legasy" ref={sectionRef}>
      <h2>Because when a brand is built from alignment,</h2>
      <h2>growth becomes a side effect.</h2>
      <h2>And legacy becomes inevitable.</h2>
    </div>
  )
}

export default Legacy