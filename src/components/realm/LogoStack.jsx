import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import img1 from "../../assets/img/ream/logocard/card1.png"
import img2 from "../../assets/img/ream/logocard/card2.png"
import img3 from "../../assets/img/ream/logocard/card3.png"

gsap.registerPlugin(ScrollTrigger)

const LogoStack = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const texts = gsap.utils.toArray(".textcontainer .step")
      const cards = gsap.utils.toArray(".cardmian .card")

      // text hide first
      gsap.set(texts, { opacity: 0, y: 50 })

      // cards hide first
      gsap.set(cards, { opacity: 0, scale: 0.8, y: 80 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: "bottom -30%",
          scrub: true,
          pin: true,
          markers: false
        }
      })

      // STEP 1 => text stay
      tl.to(texts[0], {
        opacity: 1,
        y: 0,
        duration: 2
      })
      .to(cards[0], {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 3
      }, "<")

      // only image hide
      .to(cards[0], {
        opacity: 0,
        scale: 0.8,
        y: -40,
        duration: 3
      })

      // STEP 2 => text stay
      .to(texts[1], {
        opacity: 1,
        y: 0,
        duration: 1
      })
      .to(cards[1], {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 3
      }, "<")

      // only image hide
      .to(cards[1], {
        opacity: 0,
        scale: 0.8,
        y: -40,
        duration:3
      })

      // STEP 3 => text stay
      .to(texts[2], {
        opacity: 1,
        y: 0,
        duration: 3
      })
      .to(cards[2], {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 3
      }, "<")

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="logostack" >
        <div className="staccontainer" ref={sectionRef}>

        
      <div className="container">

        <div className="textcontainer">
          <h2>Long before</h2>
          <h2 className="step text1">a logo</h2>
          <h2 className="step text2">a website</h2>
          <h2 className="step text3">
            a marketing plan <br /> exists,
          </h2>
        </div>

        <div className="cardmian">
          <div className="card img1">
            <img src={img1} alt="" />
          </div>

          <div className="card img2">
            <img src={img2} alt="" />
          </div>

          <div className="card img3">
            <img src={img3} alt="" />
          </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default LogoStack