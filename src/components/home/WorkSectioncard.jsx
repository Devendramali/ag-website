import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import drgaikwad from "./../../assets/img/projects/drgaikwad.jpg";
import anuved from "./../../assets/img/projects/anuved.jpg";
import nab from "./../../assets/img/projects/nafscob.jpg";

gsap.registerPlugin(ScrollTrigger);

// ─── DATA ─────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: "Dr. Gaikwad",
    subtitle: "The Smile Architect built beyond dentistry.",
    imgSrc: drgaikwad,
  },
  {
    id: 2,
    title: "Anuved",
    subtitle: "Tradition reborn for modern devotion.",
    imgSrc: anuved,
  },
  {
    id: 3,
    title: "NAFSCOB",
    subtitle: "Image engineering for credibility and legacy.",
    imgSrc: nab,
  },
];

// ─── MAIN COMPONENT ───────────────────────────────
export default function WorkSectioncard() {
  const cardRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {

  let mm = gsap.matchMedia()

  mm.add("(min-width: 991px)", () => {

    const cards = cardRefs.current.filter(Boolean)

    const totalScroll = (cards.length - 1) * 300

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${totalScroll + 80}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    })

    // shrink cards one by one
    cards.forEach((card, i) => {
      if (i === cards.length - 1) return

      tl.to(
        card,
        {
          height: 172,
          duration: 1,
          ease: "none",
        },
        i
      )
    })

  })

  // ❌ RESET for mobile (≤768px)
  mm.add("(max-width: 991px)", () => {
    const cards = cardRefs.current.filter(Boolean)

    gsap.set(cards, {
      clearProps: "all" // removes height, transforms, etc
    })
  })

  return () => {
    mm.revert()
  }

}, [])

  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor1")
    const cards = document.querySelectorAll(".card1")
  
    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
    }
  
    const showCursor = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)"
    }
  
    const hideCursor = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(0)"
    }
  
    window.addEventListener("mousemove", moveCursor)
  
    cards.forEach((card) => {
      card.addEventListener("mouseenter", showCursor)
      card.addEventListener("mouseleave", hideCursor)
    })
  
    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return (<>
    <div  className="work-wrapper">

      

      {/* ✅ PIN CONTAINER */}
      <div ref={containerRef}>

     
      <div  className="container work-container" >
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            cardRef={(el) => (cardRefs.current[i] = el)}
          />
        ))}
      </div>
       </div>

    </div>
    
    
    <div className="custom-cursor1 dark">
  <h3>View <br /> Site</h3>
</div>
    </>
  );
}

// ─── CARD COMPONENT ───────────────────────────────
function ProjectCard({ project, cardRef }) {
  return (
    <a
      href="#!"
      className="card1"
      ref={cardRef}
     
    >
      {/* LEFT */}
      <div className="card1-left">
        <h2 className="workhed">
          {project.title}
        </h2>
        <p className="worlpara">
          {project.subtitle}
        </p>
      </div>

      {/* RIGHT */}
      <div className="card1-right">
        <img
          src={project.imgSrc}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius:"8px"
          }}
        />
      </div>
    </a>
  );
}