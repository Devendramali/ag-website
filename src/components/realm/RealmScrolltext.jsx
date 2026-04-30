import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const RealmScrolltext = () => {

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
          It begins with intent. <br />
          Long before a logo, a website, or a marketing plan exists,
        </p>

        <p>
          there is something quieter,a belief the founder holds, <br />
          a problem they care about, <br />
          a standard they refuse to compromise. <br />
          That inner orientation becomes the brand’s gravity.
        </p>

        <p>
          I firmly believe brands are not built outward-in. <br /> They are grown inward-out. <br />
          The way you speak, decide, hire, price, design  <br />
          and show up in moments of pressure, <br /> all reveal your brand long before visuals do.
        </p>
          <p>That is why brands don’t “find” audiences. <br /> They resonate with them.</p>
          <p>When a brand is aligned at its core, <br />
            the right people recognize it instinctively. <br /> No persuasion required.</p>

      </div>
    </div>
  )
}

export default RealmScrolltext