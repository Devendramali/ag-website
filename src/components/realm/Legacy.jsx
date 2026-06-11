import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Legacy = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headings = sectionRef.current.querySelectorAll("h2");

      headings.forEach((heading) => {
        if (heading.classList.contains("splitted")) return;

        const text = heading.textContent;
        heading.innerHTML = text
          .split("")
          .map((char) => {
            return `<span class="char">${
              char === " " ? "&nbsp;" : char
            }</span>`;
          })
          .join("");

        heading.classList.add("splitted");
      });

      const chars = sectionRef.current.querySelectorAll(".char");

      gsap.set(chars, {
        opacity: 0,
        y: 10,
      });

      gsap.to(chars, {
        opacity: 1,
        y: 0,
        stagger: 0.02,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
          // markers: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="legasy" ref={sectionRef}>
      <h2>Because when a brand is built from alignment,</h2>
      <h2>growth becomes a side effect.</h2>
      <h2>And legacy becomes inevitable.</h2>
    </div>
  );
};

export default Legacy;