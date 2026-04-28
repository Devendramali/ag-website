import { useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay  } from "swiper/modules"
import card1 from "../../assets/img/founderwisdom/card.png"
import card2 from "../../assets/img/founderwisdom/1.png"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"


const FounderWisdom = () => {
   

          const slider =[
                card1,card1,card1,card1,card1
          ]
  return (
    <div className='founderwisdom bg'>
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
                <div className="secard">
                  <img src={img} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
         <a href="#" class="btn3 glodenborder  graybg">See My Approach<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#052C27" fill-opacity="1"></rect><path d="M19 19H29M29 19V29M29 19L19 29" stroke="#fff" stroke-width="1.6" stroke-linecap="square"></path></svg></a>
        </div>
        {/* <div className="bg">
            <img src={card2} alt="" />
        </div> */}

    </div>
  )
}

export default FounderWisdom