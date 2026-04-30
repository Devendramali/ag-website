import React, { useState, useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

import g1 from "../../assets/img/gallery/g1.png"
import g2 from "../../assets/img/gallery/g2.png"
import g3 from "../../assets/img/gallery/g3.png"
import g4 from "../../assets/img/gallery/g4.png"
import g5 from "../../assets/img/gallery/g5.png"
import g6 from "../../assets/img/gallery/g6.png"
import g7 from "../../assets/img/gallery/g7.png"

const GalleryFilter = () => {

  const [active, setActive] = useState("All")

  useEffect(() => {
  AOS.init({
    duration: 800,
    once: false, // 👈 set true if you want animation only once
  })
}, [])

useEffect(() => {
  AOS.refresh()
}, [active])
  const galleryContent = [
    { id: 1, title: "Strategy meeting with founders and leadership team", category: "Meeting", img: g1 },
    { id: 2, title: "Strategy meeting with founders and leadership team", category: "Spiritual", img: g2 },
    { id: 3, title: "Strategy meeting with founders and leadership team", category: "Outdoor trips", img: g3 },
    { id: 4, title: "Strategy meeting with founders and leadership team", category: "Random Clicks", img: g4 },
    { id: 5, title: "Strategy meeting with founders and leadership team", category: "Meeting", img: g5 },
    { id: 6, title: "Strategy meeting with founders and leadership team", category: "Spiritual", img: g6 },
    { id: 7, title: "Strategy meeting with founders and leadership team", category: "Outdoor trips", img: g7 },
  ]

  // filter logic
  const filteredData =
    active === "All"
      ? galleryContent
      : galleryContent.filter(item => item.category === active)

  return (
    <div className='galleryfliter'>

      {/* FILTER BUTTONS */}
      <div className="filterbuttons">
        {["All", "Meeting", "Spiritual", "Outdoor trips", "Random Clicks"].map((btn) => (
          <button
            key={btn}
            onClick={() => setActive(btn)}
            className={`btn ${
              active === btn ? "active" : ""
            }`}
          >
            {btn}
          </button>
        ))}
      </div>
        <div className="container">
            {/* GALLERY */}
            <div className="filtercont masonry">

               {filteredData.map((item, index) => (
                <div
                    className="filteritem masonry-item"
                    key={`${active}-${item.id}`}   // 👈 re-trigger animation on filter
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                >
                    <div>
                    <figure>
                        <img src={item.img} alt={item.title} className="w-full" />
                    </figure>
                    <h2>{item.title}</h2>
                    </div>
                </div>
                ))}

            </div>
        </div>

    </div>
  )
}

export default GalleryFilter