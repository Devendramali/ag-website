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
export default function WorkSection() {
  const cardRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);

    const totalScroll = (cards.length - 1) * 300;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current, // ✅ correct target
        start: "top top",
        end: `+=${totalScroll + 80}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    // 🔥 shrink cards one by one (except last)
    cards.forEach((card, i) => {
      if (i === cards.length - 1) return;

      tl.to(
        card,
        {
          height: 172,
          duration: 1,
          ease: "none",
        },
        i
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

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
    <section style={{ background:"transparent", padding: "0 0 80px 0" , height:"1660px"}}>

      {/* ✅ HEADING */}
      <div className="headpara container" style={{ textAlign: "left", marginBottom: "50px" }}>
       
            <p >Every brand, initiative, experiment <br />
                was crafted from one shared belief </p>


            <p >soul isn’t an accessory in <br /> business it’s the engine.</p>
  
      
      </div>

      {/* ✅ PIN CONTAINER */}
      <div ref={containerRef}>

     
      <div className="container" style={{width:"100%", maxWidth:"100%", padding:"0 24px"}} >
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            cardRef={(el) => (cardRefs.current[i] = el)}
          />
        ))}
      </div>
       </div>

    </section>
    
    
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
      style={{
        position: "relative",
        height: "340px",
        overflow: "hidden",
        // background: "#fff",
        borderBottom: "1px solid #5C5C5C",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        marginBottom: "30px",
        textDecoration: "none",
        paddingBottom:"30px"
      }}
    >
      {/* LEFT */}
      <div style={{ textAlign:"left",padding: "30px" }}>
        <h2 className="workhed">
          {project.title}
        </h2>
        <p className="worlpara">
          {project.subtitle}
        </p>
      </div>

      {/* RIGHT */}
      <div className="" style={{height:"100%", borderRadius:"8px", overflow:"hidden"}}>
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