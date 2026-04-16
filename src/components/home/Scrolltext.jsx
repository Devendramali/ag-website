import React, { useEffect, useRef } from 'react'
import img1 from "../../assets/img/scroll/1.png"
import img2 from "../../assets/img/scroll/2.png"
import img3 from "../../assets/img/scroll/3.png"

const Scrolltext = () => {

  const containerRef = useRef(null)

  useEffect(() => {
    const words = containerRef.current.querySelectorAll(".word")

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const start = containerRef.current.offsetTop
      const height = containerRef.current.offsetHeight

      let progress = (scrollTop - start + window.innerHeight * 0.7) / height
      progress = Math.min(Math.max(progress, 0), 1)

      const activeCount = Math.floor(progress * words.length)

   words.forEach((word, index) => {
        if (index <= activeCount) {
            word.style.opacity = 1

            const img = word.querySelector("img")
            if (img) {
            img.style.transform = "scale(1.7)" // 👈 grow
            }

        } else {
            word.style.opacity = 0.4

            const img = word.querySelector("img")
            if (img) {
            img.style.transform = "scale(1)" // 👈 normal
            }
        }
        })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className='scrolltext p-90 ' ref={containerRef}>
      <div className="container">
        <p>

          <span className="word">In</span>{" "}
          <span className="word">a</span>{" "}
          <span className="word">world</span>{" "}
          <span className="word">obsessed</span>{" "}
          <span className="word">with</span>

          <span className="word"><img src={img1} alt="" /></span>{" "}

          <span className="word">virality,</span>{" "}
          <span className="word">I'm</span>{" "}
          <span className="word">obsessed</span>{" "}
          <span className="word">with</span>{" "}
          <span className="word">depth.</span>{" "}

          <span className="word">I</span>{" "}
          <span className="word">believe</span>{" "}
          <span className="word">brands</span>{" "}
          <span className="word">aren't</span>{" "}
          <span className="word">built</span>{" "}
          <span className="word">by</span>{" "}
          <span className="word">ads</span>{" "}
          <span className="word">they're</span>{" "}
          <span className="word">built</span>{" "}
          <span className="word">by</span>{" "}
          <span className="word">emotions</span>{" "}
          <span className="word">that</span>{" "}

          <span className="word"><img src={img2} alt="" /></span>{" "}

          <span className="word">move</span>{" "}
          <span className="word">people.</span>{" "}

          <span className="word">That</span>{" "}
          <span className="word">belief</span>{" "}
          <span className="word">became</span>{" "}
          <span className="word">my</span>{" "}
          <span className="word">life's</span>{" "}
          <span className="word">work</span>{" "}
          <span className="word">the</span>{" "}
          <span className="word">Brand</span>{" "}
          <span className="word">Soul</span>{" "}
          <span className="word">Philosophy.</span>{" "}

          <span className="word"><img src={img3} alt="" /></span>

        </p>
      </div>
    </div>
  )
}

export default Scrolltext