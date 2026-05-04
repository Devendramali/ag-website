import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import soul from "../../assets/img/soul/1.png"
import science from "../../assets/img/soul/2.png"
import scale from "../../assets/img/soul/3.png"

gsap.registerPlugin(ScrollTrigger)

const BrandSoulSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // STOP GSAP ON MOBILE
      if (window.innerWidth <= 991) {
        gsap.set(
          ".line, .thetext, .bottomtext, .setcard .carditem",
          {
            clearProps: "all",
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1
          }
        )
        return
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=450%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      })

      gsap.set(".line", {
        opacity: 0,
        y: 40,
      })

      gsap.set(".setcard .carditem", {
        opacity: 0,
        scale: 0.7,
      })

      gsap.set(".setcard .carditem.science", {
        y: "-800px",
        x: -400,
      })

      gsap.set(".setcard .carditem.soul", {
        y: "-400px",
        x: "-20%",
      })

      gsap.set(".setcard .carditem.scale", {
        y: "-580px",
        x: "77%",
      })

      gsap.set(".thetext, .bottomtext", {
        opacity: 0,
        y: 40,
      })

      tl.to(".line1", {
        opacity: 1,
        y: 0,
        duration: 1,
      })

        .to(".line2", {
          opacity: 1,
          y: 0,
          duration: 1,
        })
        .to(".science", {
          opacity: 1,
          duration: 1,
        }, "<")

        .to(".line3", {
          opacity: 1,
          y: 0,
          duration: 1,
        })
        .to(".scale", {
          opacity: 1,
          duration: 1,
        }, "<")

        .to(".line4", {
          opacity: 1,
          y: 0,
          duration: 1,
        })
        .to(".soul", {
          opacity: 1,
          duration: 1,
        }, "<")

        .to(".thetext", {
          opacity: 1,
          y: 0,
          duration: 1,
        })

        .to(".soul", {
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 1.5,
        })

        .to(".science", {
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 1.5,
        }, "<")

        .to(".scale", {
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 1.5,
        }, "<")

        .to(".bottomtext", {
          opacity: 1,
          y: 0,
          duration: 1,
        })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="brandsoulsec">
      <div className="brandsoilcontainer" ref={sectionRef}>
        <div className="container">
          <div className="brandwrap">

            <div className="topcontent">
              <h2 className="line line1">When Soul Guides Decisions,</h2>
              <h2 className="line line2">Science Supports Execution</h2>
              <h2 className="line line3">And Scale Is Approached Consciously,</h2>
              <h2 className="line line4">
                Brands Stop Chasing Attention.
                <br />
                They Start Earning Trust.
              </h2>
            </div>

            <div className="bootomcaosl">

              <div className="thetext">
                <h3>The</h3>
              </div>

              <div className="setcard">

                <div className="carditem soul">
                  <img src={soul} alt="" />
                </div>

                <div className="carditem science">
                  <img src={science} alt="" />
                </div>

                <div className="carditem scale">
                  <img src={scale} alt="" />
                </div>

              </div>

              <div className="bottomtext">
                <h2>
                  Philosophy Is Not A Method.
                  <br />
                  It Is A Way Of Thinking.
                </h2>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandSoulSection