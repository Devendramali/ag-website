import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const AboutScrolltext = () => {

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
    words.forEach((word,i) => {

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
    <div className='scrolltext abouttextscroll p-90' ref={containerRef}>
      <div className="container text-center">

        <p className='mt-0'>
          My next chapter is about building with people,
          not just for them.
        </p>

        <p>
          Through The Bharat Building Mission,
          I’m creating a community of founders
          from every corner of India — Tier 2, Tier 3,
          and beyond
        </p>

        <p>
          who want to grow with purpose, not pressure.
          Because someday, when someone says <br />
          “Bharat is rising,” <br />
          I want to know <br />
          we helped build that rise, with soul.
        </p>

      </div>
    </div>
  )
}

export default AboutScrolltext