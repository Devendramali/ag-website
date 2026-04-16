import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import card1 from "../../assets/img/card/1.png"
import card2 from "../../assets/img/card/2.png"
import card3 from "../../assets/img/card/3.png"
import card4 from "../../assets/img/card/card4.png"
import card5 from "../../assets/img/card/card5.png"
import card6 from "../../assets/img/card/card6.png"

const StackCards = () => {

  const containerRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {

     let mm = gsap.matchMedia()

mm.add("(min-width: 991px)", () => {

  const cards = gsap.utils.toArray(".cardw")

  gsap.set(cards, {
    y: (i) => i * 660,
    zIndex: (i) => cards.length + i
  })

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      pin: true,
    }
  })

  cards.forEach((card, i) => {
    tl.to(card, {
      y: 0,
      duration: 1
    }, i)
  })

})


// 👉 Reset for small screens
mm.add("(max-width: 991px)", () => {
  const cards = gsap.utils.toArray(".cardw")

  gsap.set(cards, {
    clearProps: "all" // removes GSAP inline styles
  })
})

    }, containerRef)

    return () => ctx.revert()

  }, [])

  return (
    <div className="stack-wrapper" ref={containerRef}>
      <div className="container">

        {/* CARD 1 */}
        <div className="maincard cardw">
          <div className="cardhead">
            <h2 className="num">01</h2>
            <h2 className="headtext">Brand Soul Philosophy</h2>
            <a href="#" className="btn3">Explore More 
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="24" fill="#052C27" fill-opacity="0.15"/>
                <path d="M19 19H29M29 19V29M29 19L19 29" stroke="#052C27" stroke-width="1.6" stroke-linecap="square"/>
              </svg>
            </a>
          </div>
          <div className="cardbody">
            <div className="para1">
            <p>Where behavioral science meets emotion. </p>
           <p> From brand strategy and digital infrastructure to Image Engineering  </p>
           <p> this is how we build brands that move people and grow with integrity.</p>

            </div>
            <div className="boxgrid">
              <div className="row">
                <div className="col-lg-4">
                  <div className="box1">
                    <h3>Brand Identity setup</h3>
                    <figure>
                      <img src={card1} alt="" />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="box1">
                    <h3>Digital Infrastructure</h3>
                    <figure>
                      <img src={card2} alt="" />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="box1">
                    <h3>Image  reengineering</h3>
                    <figure>
                      <img src={card1} alt="" />
                    </figure>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="maincard cardw">
          <div className="cardhead">
            <h2 className="num">02</h2>
            <h2 className="headtext">Building for Bharat</h2>
            <a href="#" className="btn3">Join the Movement <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="24" fill="white" fill-opacity="0.15"/>
            <path d="M19 19H29M29 19V29M29 19L19 29" stroke="white" stroke-width="1.6" stroke-linecap="square"/>
            </svg>
            </a>
          </div>
         <div className="cardbody">
            <div className="para1">
            <p>Where behavioral science meets emotion. </p>
           <p> From brand strategy and digital infrastructure to Image Engineering  </p>
           <p> this is how we build brands that move people and grow with integrity.</p>

            </div>
            <div className="boxgrid">
              <ul>
                <li><a href="#!">Join the bharat Community <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="24" fill="white" fill-opacity="0.15"/>
                <path d="M19 19H29M29 19V29M29 19L19 29" stroke="white" stroke-width="1.6" stroke-linecap="square"/>
                </svg>
                </a></li>
                                <li><a href="#!">Best Rate Website <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="24" fill="white" fill-opacity="0.15"/>
                <path d="M19 19H29M29 19V29M29 19L19 29" stroke="white" stroke-width="1.6" stroke-linecap="square"/>
                </svg>
                </a></li>
                                <li><a href="#!">Business Tools <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="24" fill="white" fill-opacity="0.15"/>
                <path d="M19 19H29M29 19V29M29 19L19 29" stroke="white" stroke-width="1.6" stroke-linecap="square"/>
                </svg>
                </a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="maincard cardw">
          <div className="cardhead">
            <h2 className="num">03</h2>
            <h2 className="headtext">Learn with AG</h2>
            <a href="#" className="btn3">Explore More <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="24" fill="white" fill-opacity="0.15"/>
              <path d="M19 19H29M29 19V29M29 19L19 29" stroke="white" stroke-width="1.6" stroke-linecap="square"/>
              </svg>
              </a>
          </div>
           <div className="cardbody">
            <div className="para1">
            <p>Where behavioral science meets emotion. </p>
           <p> From brand strategy and digital infrastructure to Image Engineering  </p>
           <p> this is how we build brands that move people and grow with integrity.</p>

            </div>
            <div className="boxgrid">
              <div className="row">
                <div className="col-lg-4">
                  <div className="box1">
                    <figure>
                      <img src={card4} alt="" />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="box1">
                    <figure>
                      <img src={card5} alt="" />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="box1">
                    <figure>
                      <img src={card6} alt="" />
                    </figure>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StackCards