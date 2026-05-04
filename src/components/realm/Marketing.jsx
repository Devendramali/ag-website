import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Marketing = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".marketing h2", {
        opacity: 0,
        y: 80,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="marketing" ref={sectionRef}>
      <h2>
        Brands don’t fail because of poor marketing.
        <br />
        They fail because of internal misalignment.
      </h2>
    </div>
  )
}

export default Marketing