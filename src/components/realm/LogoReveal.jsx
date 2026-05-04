import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import l1 from "../../assets/img/logos/l1.svg"
import l2 from "../../assets/img/logos/l2.svg"
import l3 from "../../assets/img/logos/l3.svg"
import l4 from "../../assets/img/logos/l4.svg"
import l5 from "../../assets/img/logos/l5.png"
import l6 from "../../assets/img/logos/l6.png"
import l7 from "../../assets/img/logos/l7.svg"
import l8 from "../../assets/img/logos/l8.png"
import l9 from "../../assets/img/logos/l9.svg"
import l10 from "../../assets/img/logos/l10.svg"
import l11 from "../../assets/img/logos/l11.png"
import l12 from "../../assets/img/logos/l12.svg"
import l13 from "../../assets/img/logos/l13.png"

// import { useEffect } from "react"
gsap.registerPlugin(ScrollTrigger)

const LogoReveal = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // STOP ON MOBILE
      if (window.innerWidth <= 991) {
        gsap.set(".centertext, .brandlogo", {
          clearProps: "all",
          opacity: 1,
          scale: 1
        })
        return
      }

      const centerText = sectionRef.current.querySelector(".centertext")
      const logos = gsap.utils.toArray(".brandlogo")

      gsap.set(centerText, {
        opacity: 0,
        scale: 0.8
      })

      gsap.set(logos, {
        opacity: 0,
        scale: 0.6
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 1,
          pin: true,
          markers: false
        }
      })

      tl.to(centerText, {
        opacity: 1,
        scale: 1,
        duration: 1
      })

      .to(logos, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: {
          each: 0.15,
          from: "random"
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="logoreveal">
      <div className="logocontainer" ref={sectionRef}>

        <div className="centertext">
          <h2>
            When A Brand Is Aligned At Its Core,
            <br />
            The Right People Recognize It Instinctively.
            <br />
            No Persuasion Required.
          </h2>
        </div>

        <img src={l1} className="brandlogo logo1" alt="" />
        <img src={l2} className="brandlogo logo2" alt="" />
        <img src={l3} className="brandlogo logo3" alt="" />
        <img src={l4} className="brandlogo logo4" alt="" />
        <img src={l5} className="brandlogo logo5" alt="" />
        <img src={l6} className="brandlogo logo6" alt="" />
        <img src={l7} className="brandlogo logo7" alt="" />
        <img src={l8} className="brandlogo logo8" alt="" />
        <img src={l9} className="brandlogo logo9" alt="" />
        <img src={l10} className="brandlogo logo10" alt="" />
        <img src={l11} className="brandlogo logo11" alt="" />
        <img src={l12} className="brandlogo logo12" alt="" />
        <img src={l13} className="brandlogo logo13" alt="" />

      </div>
    </section>
  )
}

export default LogoReveal