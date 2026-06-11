import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RealmScrolltext = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const paragraphs = containerRef.current.querySelectorAll("p");

    paragraphs.forEach((p) => {
      if (p.classList.contains("splitted")) return;

      const processNode = (node) => {
        [...node.childNodes].forEach((child) => {
          // Text Node
          if (child.nodeType === 3) {
            const chars = child.textContent.split("");

            const fragment = document.createDocumentFragment();

            chars.forEach((char) => {
              const span = document.createElement("span");
              span.className = "char";
              span.innerHTML = char === " " ? "&nbsp;" : char;
              fragment.appendChild(span);
            });

            child.parentNode.replaceChild(fragment, child);
          }

          // Keep BR and process nested tags
          else if (
            child.nodeType === 1 &&
            child.tagName !== "BR"
          ) {
            processNode(child);
          }
        });
      };

      processNode(p);
      p.classList.add("splitted");
    });

    const chars = containerRef.current.querySelectorAll(".char");

    gsap.set(chars, {
      opacity: 0,
      y: 8,
    });

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      stagger: 0.015,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom 80%",
        scrub: 1,
        // markers: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      className="realscroltext abouttextscroll p-90"
      ref={containerRef}
    >
      <div className="container text-center">
        <p className="mt-0">
          I firmly believe brands are not built outward-in.
          <br />
          They are grown inward-out.
          <br />
          The way you speak, decide, hire, price, design,
          <br />
          and show up in moments of pressure,
          <br />
          all reveal your brand long before visuals do.
        </p>

        <p className="goldpara">
          That is why brands don’t “find” audiences.
          <br />
          They resonate with them.
        </p>
      </div>
    </div>
  );
};

export default RealmScrolltext;