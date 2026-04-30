import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode } from "swiper/modules"

import "swiper/css"

import slider1 from "../../assets/img/ream/1.png"
import slider2 from "../../assets/img/ream/2.png"
import slider3 from "../../assets/img/ream/3.png"
import slider4 from "../../assets/img/ream/4.png"
import slider5 from "../../assets/img/ream/5.png"
import slider6 from "../../assets/img/ream/6.png"
import slider7 from "../../assets/img/ream/7.png"
import slider8 from "../../assets/img/ream/8.png"
import slider9 from "../../assets/img/ream/9.png"
import slider10 from "../../assets/img/ream/10.png"
import slider11 from "../../assets/img/ream/11.png"
import slider12 from "../../assets/img/ream/12.png"
import slider13 from "../../assets/img/ream/13.png"

const Realmbanner = () => {

  const slides = [
    slider1, 
    slider2, 
    slider3, 
    slider4, 
    slider5, 
    slider6, 
    slider7, 
    slider8, 
    slider9, 
    slider10, 
    slider11, 
    slider12, 
    slider13, 
  ]

  return (
    <div className="reamban">

      <h2>
        Where brands aren’t <br />
        assembled, they’re aligned
      </h2>
      <div className="slideroverlay">

      
      {/* LEFT TO RIGHT */}
     <Swiper
  modules={[Autoplay, FreeMode]}
  slidesPerView={"auto"}
  spaceBetween={20}
  loop={true}
  speed={6000}
  allowTouchMove={false}
  freeMode={{
    enabled: true,
    momentum: false
  }}
  autoplay={{
    delay: 0,
    disableOnInteraction: false
  }}
  className="smothslider"
>
        {slides.map((item, index) => (
          <SwiperSlide key={index} className="slideritem">
            <img src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* RIGHT TO LEFT */}
     <Swiper
  modules={[Autoplay, FreeMode]}
  slidesPerView={"auto"}
  spaceBetween={20}
  loop={true}
  speed={6000}
  allowTouchMove={false}
  freeMode={{
    enabled: true,
    momentum: false
  }}
  autoplay={{
    delay: 0,
    reverseDirection: true,
    disableOnInteraction: false
  }}
  className="smothslider mt-4"
>
        {slides.map((item, index) => (
          <SwiperSlide key={index} className="slideritem">
            <img src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

    </div>
  )
}

export default Realmbanner