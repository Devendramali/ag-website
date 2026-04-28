import { useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay  } from "swiper/modules"
import card1 from "../../assets/img/series/4.png"
import card2 from "../../assets/img/series/2.png"
import card3 from "../../assets/img/series/3.png"
import card4 from "../../assets/img/series/1.png"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
const MiniSeries = () => {
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
      const slider =[
                    card1,card2,card3,card4,card2
              ]
  return (
    <div className="miniseries">
        <div className="container">
          <h2 className='heading'>The Founder Wisdom Vault</h2>
              <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            
            slidesPerView={4}
            loop={true}
            // centeredSlides={true}

            autoplay={{
            delay: 2500,           
            disableOnInteraction: false,
            pauseOnMouseEnter: true ,
          }}
            breakpoints={{
              0: { slidesPerView: 1.4 },
              576: { slidesPerView: 2.5 },
              992: { slidesPerView: 4 },
            }}
          >
            {slider.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="secard2">
                  <img src={img} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>

             
      <div className="custom-cursor2">
        <h3>View<br />Series</h3>
      </div> 
    </div>
  )
}

export default MiniSeries