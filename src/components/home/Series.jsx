import { useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay  } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import s1 from "../../assets/img/series/1.png"
import s2 from "../../assets/img/series/2.png"
import s3 from "../../assets/img/series/3.png"
import s4 from "../../assets/img/series/4.png"

const Series = () => {

  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor2")
    const cards = document.querySelectorAll(".secard2")

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

  return (
    <>
      <div className='series'>
        <div className="container">
          <p>
            Every brand, every initiative, every experiment you <br />
            see here — was born from one shared belief:
          </p>
        </div>

        <div className="seriescont container">

          {/* 🔥 SWIPER */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            
            slidesPerView={4}
            loop={true}

            autoplay={{
            delay: 2500,           
            disableOnInteraction: false,
            pauseOnMouseEnter: true ,
          }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 4 },
            }}
          >
            {[s1, s2, s3, s4, s1, s2, s3, s4].map((img, i) => (
              <SwiperSlide key={i}>
                <div className="secard2">
                  <img src={img} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        <div className="container mt-5">
          <a href="#" className="btn3">Checkout 
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 7H17M17 7V17M17 7L7 17" stroke="white" stroke-width="1.6" stroke-linecap="square"/>
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className="custom-cursor2">
        <h3>View<br />Series</h3>
      </div>
    </>
  )
}

export default Series