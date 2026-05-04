import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import scaleimg from "../../assets/img/ream/scaleimg.jpg"

gsap.registerPlugin(ScrollTrigger)

const Intent = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Heading animation
      gsap.from(titleRef.current.querySelectorAll("span"), {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 45%",
          end: "bottom top",
          markers: false,
          toggleActions: "play reverse play reverse"
        }
      })

      // Golden shadow1 for INTENT
      gsap.fromTo(
        titleRef.current.querySelector(".shadow1"),
        {
          textShadow: "0 0 0px rgba(199,160,8,0)"
        },
        {
          textShadow: "0 0 12px #C7A008",
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 45%",
            end: "bottom top",
            toggleActions: "play reverse play reverse"
          }
        }
      )

      // Image fade zoom
      gsap.fromTo(
        imgRef.current,
        {
          scale: 0.7,
          opacity: 0.6
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 50%",
            end: "bottom top",
            markers: false,
            toggleActions: "play reverse play reverse"
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="intern" ref={sectionRef}>
      <h2 ref={titleRef}>
        <span>It Begins With An </span>
        <span className="shadow1">INTENT</span>
      </h2>

      <div className="scaleimg" ref={imgRef}>
        <img src={scaleimg} alt="intent" />
      </div>
    </div>
  )
}

export default Intent