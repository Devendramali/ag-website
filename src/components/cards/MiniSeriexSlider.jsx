import { useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay  } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"



const MiniSeriexSlider = ({item}) => {
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
  return (<>
    <div className='miniserisslidermain'>
        <h2>{item.heading}</h2>
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
              0: { slidesPerView: 1.4 },
              576: { slidesPerView: 2.5 },
              992: { slidesPerView: 4 },
            }}
          >
            {item.slider.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="secard2">
                  <img src={img} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <a href="" className="btn3">
            View More
          </a>
    </div>



   
      <div className="custom-cursor2">
        <h3>View<br />Series</h3>
      </div> 
    </>
  )
}

export default MiniSeriexSlider