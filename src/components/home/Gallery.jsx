import React, { useEffect, useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import g1 from "../../assets/img/gallery/1.png"
import g2 from "../../assets/img/gallery/2.jpg"
import g3 from "../../assets/img/gallery/3.png"
import g4 from "../../assets/img/gallery/4.png"
import logo1 from "../../assets/img/logos/anuved.png"
import logo2 from "../../assets/img/logos/bharat.png"
import logo3 from "../../assets/img/logos/bnl.jpg"
import logo4 from "../../assets/img/logos/sg.png"
import logo5 from "../../assets/img/logos/soupherb.png"

gsap.registerPlugin(ScrollTrigger)

const CARDS = [
    { logo: logo5, img: g4 },
  { logo: logo4, img: g1 },
  { logo: logo3, img: g2 },
  { logo: logo2, img: g3 },
  { logo: logo5, img: g4 },
  { logo: logo4, img: g1 },
  { logo: logo1, img: g2 },
]

const Gallery = () => {
  const sliderRef      = useRef(null)  // the moving strip
  const scrollSliderRef = useRef(null) // what gets pinned

  // ── Horizontal scroll — pin only .scrollslider ───────────────────────────
  useLayoutEffect(() => {
    const slider       = sliderRef.current
    const scrollSlider = scrollSliderRef.current

    // CRITICAL: parents must NOT clip — force this in JS to be safe
    let el = scrollSlider.parentElement
    while (el && el !== document.body) {
      el.style.overflow = "visible"
      el = el.parentElement
    }

    const getScrollAmount = () => slider.scrollWidth - window.innerWidth

    const tween = gsap.to(slider, {
      x: () => -getScrollAmount(),
      ease: "none",
      scrollTrigger: {
        trigger:           scrollSlider,
        pin:               scrollSlider,
        start:             "top top",
        end:               () => "+=" + getScrollAmount(),
        scrub:             1.4,
        pinSpacing:        true,   // GSAP inserts a spacer — keeps sections separated
        anticipatePin:     1,
        invalidateOnRefresh: true,
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  // ── Custom cursor ────────────────────────────────────────────────────────
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor")
    if (!cursor) return

    const moveCursor = (e) =>
      gsap.to(cursor, {
        left: e.clientX, top: e.clientY,
        duration: 0.18, ease: "power2.out", overwrite: true,
      })

    const showCursor = () =>
      gsap.to(cursor, { scale: 1, duration: 0.25, ease: "back.out(1.5)", overwrite: true })

    const hideCursor = () =>
      gsap.to(cursor, { scale: 0, duration: 0.2, ease: "power2.in", overwrite: true })

    const cards = document.querySelectorAll(".card")
    window.addEventListener("mousemove", moveCursor)
    cards.forEach((c) => {
      c.addEventListener("mouseenter", showCursor)
      c.addEventListener("mouseleave", hideCursor)
    })

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      cards.forEach((c) => {
        c.removeEventListener("mouseenter", showCursor)
        c.removeEventListener("mouseleave", hideCursor)
      })
    }
  }, [])

  // ── Smooth lerp drag (mouse + touch) ─────────────────────────────────────
  useEffect(() => {
    const slider  = sliderRef.current
    const trigger = ScrollTrigger.getAll().find(
      (t) => t.vars?.trigger === scrollSliderRef.current
    )
    if (!trigger) return

    let targetProgress  = trigger.animation.progress()
    let currentProgress = targetProgress
    let isDragging      = false
    let startClientX    = 0
    let startProgress   = 0
    let rafId           = null
    const LERP = 0.10

    const lerp  = (a, b, t) => a + (b - a) * t
    const clamp = (v, min, max) => Math.max(min, Math.min(max, v))

    const tick = () => {
      if (!isDragging && Math.abs(targetProgress - currentProgress) < 0.0001) {
        rafId = null
        return
      }
      currentProgress = lerp(currentProgress, targetProgress, LERP)
      trigger.animation.progress(currentProgress)
      rafId = requestAnimationFrame(tick)
    }
    const startTick = () => { if (!rafId) rafId = requestAnimationFrame(tick) }

    // Mouse
    const onMouseDown = (e) => {
      isDragging     = true
      startClientX   = e.clientX
      startProgress  = trigger.animation.progress()
      targetProgress = startProgress
      slider.classList.add("is-dragging")
    }
    const onMouseMove = (e) => {
      if (!isDragging) return
      const delta = (e.clientX - startClientX) / (slider.scrollWidth - window.innerWidth)
      targetProgress = clamp(startProgress - delta, 0, 1)
      startTick()
    }
    const onMouseUp = () => {
      isDragging = false
      slider.classList.remove("is-dragging")
    }

    // Touch
    let startTouchX        = 0
    let startTouchProgress = 0

    const onTouchStart = (e) => {
      startTouchX        = e.touches[0].clientX
      startTouchProgress = trigger.animation.progress()
      targetProgress     = startTouchProgress
    }
    const onTouchMove = (e) => {
      const delta = (e.touches[0].clientX - startTouchX) / (slider.scrollWidth - window.innerWidth)
      targetProgress = clamp(startTouchProgress - delta, 0, 1)
      startTick()
    }

    slider.addEventListener("mousedown",  onMouseDown)
    window.addEventListener("mousemove",  onMouseMove)
    window.addEventListener("mouseup",    onMouseUp)
    slider.addEventListener("touchstart", onTouchStart, { passive: true })
    slider.addEventListener("touchmove",  onTouchMove,  { passive: true })

    return () => {
      slider.removeEventListener("mousedown",  onMouseDown)
      window.removeEventListener("mousemove",  onMouseMove)
      window.removeEventListener("mouseup",    onMouseUp)
      slider.removeEventListener("touchstart", onTouchStart)
      slider.removeEventListener("touchmove",  onTouchMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      {/*
        KEY STRUCTURE:
        .gallery          → no overflow:hidden, no transform, just background + padding
          .container      → heading only — scrolls away normally
          .scrollslider   → direct child, gets pinned by GSAP, GSAP inserts spacer after it
      */}
      <div
        className="gallery"
        style={{
          overflow: "visible",   // never clip — lets GSAP spacer work
          transform: "none",     // no transform — avoids stacking context trapping the pin
        }}
      >
        {/* Heading — scrolls away before the pin kicks in */}
        <div className="container">
          <h2 className="heading">Gallery</h2>
        </div>

        {/* Pinned section — GSAP will insert a pin-spacer div after this */}
        <div
          className="scrollslider"
          ref={scrollSliderRef}
          style={{ overflow: "hidden" }} // clip only here, not on parent
        >
          <div className="slider" ref={sliderRef}>
            {CARDS.map((c, i) => (
              <div className="card" key={i}>
                <figure className="logocadr">
                  <img src={c.logo} alt={`logo-${i}`} />
                </figure>
                <figure className="mainimg">
                  <img src={c.img} alt={`gallery-${i}`} />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="custom-cursor dark">
        <h3>Swipe</h3>
      </div>
    </>
  )
}

export default Gallery