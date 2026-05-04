import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import c1 from "../../assets/img/ream/logocard/c1.png"
import c2 from "../../assets/img/ream/logocard/c2.png"
import c3 from "../../assets/img/ream/logocard/c3.png"
import c4 from "../../assets/img/ream/logocard/c4.png"
import c5 from "../../assets/img/ream/logocard/c5.png"

gsap.registerPlugin(ScrollTrigger)

const BrandGravity = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // MOBILE STOP
      if (window.innerWidth <= 991) return

      const cards = gsap.utils.toArray(".movecard")
      const box = sectionRef.current.querySelector(".brandbox")
      const heading = sectionRef.current.querySelector(".brandbox h2")
      const extra = gsap.utils.toArray(".extra")
      const movetext = gsap.utils.toArray(".movecard h3")

      gsap.set(cards, {
        opacity: 0,
        y: 60,
        scale: 0.9
      })

      gsap.set(box, {
        opacity: 0
      })

      gsap.set(movetext, {
        opacity: 1,
        height: "auto"
      })

      gsap.set([heading, ...extra], {
        opacity: 0,
        y: 40
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          markers: false
        }
      })

      tl.to(cards[0], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6
      })
      .to(cards[1], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6
      })
      .to(cards[2], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6
      })

      .to(box, {
        opacity: 1,
        duration: 0.6
      })

      .to(cards[0], {
        x: -24,
        y: 295,
        duration: 1
      })
      .to(cards[1], {
        x: 0,
        y: 295,
        duration: 1
      }, "<")
      .to(cards[2], {
        x: 24,
        y: 295,
        duration: 1
      }, "<")

      .to(heading, {
        opacity: 1,
        y: 0,
        duration: 0.6
      })

      .to(movetext, {
        opacity: 0,
        height: 0,
        margin: 0,
        duration: 0.6,
        stagger: 0.1
      })

      .to(extra[0], {
        opacity: 1,
        y: 0,
        duration: 0.6
      })
      .to(extra[1], {
        opacity: 1,
        y: 0,
        duration: 0.6
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="gravitysection">
      <div className="container">
        <div className="gravitycontainer" ref={sectionRef}>

          <div className="topstage">

            <div className="movecard card11">
              <h3>a belief the founder holds</h3>
              <img src={c1} alt="" />
            </div>

            <div className="movecard card2">
              <h3>a problem they care about</h3>
              <img src={c2} alt="" />
            </div>

            <div className="movecard card3">
              <h3>a standard they refuse to compromise.</h3>
              <img src={c3} alt="" />
            </div>

          </div>

          <div className="brandbox">
            <h2>That Inner Orientation Becomes The Brand’s Gravity.</h2>

            <div className="extra extra1">
              <img src={c4} alt="" />
            </div>

            <div className="extra extra2">
              <img src={c5} alt="" />
            </div>

            <div className="mobilebox">
              <div className="itembox">
                <img src={c1} alt="" />
              </div>
              <div className="itembox">
                <img src={c2} alt="" />
              </div>
              <div className="itembox">
                <img src={c3} alt="" />
              </div>
              <div className="itembox">
                <img src={c4} alt="" />
              </div>
              <div className="itembox">
                <img src={c5} alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BrandGravity