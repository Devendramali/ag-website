import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const RealmScrolltext2 = () => {

  const containerRef = useRef(null)

  useEffect(() => {

    if (!containerRef.current) return

    const paragraphs = containerRef.current.querySelectorAll("p")

    paragraphs.forEach((p) => {

      // ✅ prevent re-splitting
      if (p.classList.contains("splitted")) return

      let html = p.innerHTML

      // preserve <br>
      html = html.replace(/<br\s*\/?>/gi, " <br> ")

      const words = html.trim().split(/\s+/)

      const newHTML = words.map(word => {
        if (word === "<br>") return "<br/>"
        return `<span class="word">${word}&nbsp;</span>`
      }).join("")

      p.innerHTML = newHTML
      p.classList.add("splitted") // ✅ mark as processed

    })

    const words = containerRef.current.querySelectorAll(".word")

    // ✅ animate each word
    words.forEach((word, i) => {

      gsap.fromTo(word,
        {
          opacity: 0.2,
          // y: 20,
          // filter: "blur(6px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          ease: "none",
          scrollTrigger: {
            trigger: word,
            start: "top 60%",
            end: "top 40%",
            scrub: 1,
            // markers:true
          }
        }
      )

    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }

  }, [])

  return (
    <div className='realscroltext abouttextscroll  p-90' ref={containerRef}>
      <div className="container text-center">

        <p className='mt-0'>
        Brands don’t fail because of poor marketing. <br /> They fail because of internal misalignment.
        </p>

        <p>
   When soul guides decisions, <br /> science supports execution, <br /> and scale is approached consciously, <br /> brands stop chasing attention. <br />
They start earning trust.
        </p>

        <p> 
          The SOUL • SCIENCE • SCALE <br />
philosophy is not a method. <br /> It is a way of thinking.
        </p>
          <p>Because when a brand is built from alignment, <br /> growth becomes a side effect. <br />
And legacy becomes inevitable.</p>

      </div>
    </div>
  )
}

export default RealmScrolltext2