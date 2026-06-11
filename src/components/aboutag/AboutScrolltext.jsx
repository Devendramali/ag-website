import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutScrolltext = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const paragraphs = containerRef.current.querySelectorAll("p");

    paragraphs.forEach((p) => {
      if (p.classList.contains("splitted")) return;

      const wrapTextNodes = (node) => {
        [...node.childNodes].forEach((child) => {
          // Text node
          if (child.nodeType === 3) {
            const words = child.textContent.split(/(\s+)/);

            const fragment = document.createDocumentFragment();

            words.forEach((word) => {
              if (word.trim() === "") {
                fragment.appendChild(document.createTextNode(word));
              } else {
                const span = document.createElement("span");
                span.className = "word";
                span.textContent = word;
                fragment.appendChild(span);
              }
            });

            child.parentNode.replaceChild(fragment, child);
          }
          // Element node (except BR)
          else if (
            child.nodeType === 1 &&
            child.tagName !== "BR"
          ) {
            wrapTextNodes(child);
          }
        });
      };

      wrapTextNodes(p);
      p.classList.add("splitted");
    });

    const words = containerRef.current.querySelectorAll(".word");

    gsap.set(words, {
      opacity: 0,
      y: 20,
      display: "inline-block",
    });

    gsap.to(words, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      ease: "power1.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 65%",
        end: "bottom 60%",
        scrub: 1,
        // markers: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="scrolltext abouttextscroll p-90" ref={containerRef}>
      <div className="container text-center">
        <p className="mt-0">
          My next chapter is about building with people,
          not just for them.
        </p>

        <p>
          Through The{" "}
          <a href="#!">Bharat Building Mission</a>,
          I’m creating a community of founders
          from every corner of India — Tier 2, Tier 3,
          and beyond.
        </p>

        <p>
          who want to grow with purpose, not pressure.
          Because someday, when someone says <br />
          “Bharat is rising,” <br />
          I want to know <br />
          we helped build that rise, with soul.
        </p>
      </div>
    </div>
  );
};

export default AboutScrolltext;