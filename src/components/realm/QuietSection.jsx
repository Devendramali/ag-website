import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const QuietSection = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const text = textRef.current
      const original = "There Is Something quieter"

      let obj = { value: 0 }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          scrub: true,
          pin: true,
          markers: false
        }
      })

      // blank screen first
      tl.to({}, { duration: 1 })

      // typing animation
      tl.to(obj, {
        value: original.length,
        duration: 3,
        ease: "none",
        onUpdate: () => {
          text.innerText = original.slice(0, Math.floor(obj.value))
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="quietsection" >
      <div className="quecontainer" ref={sectionRef}>
        <h2 ref={textRef}></h2>
      </div>
    </div>
  )
}

export default QuietSection