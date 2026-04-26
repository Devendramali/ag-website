import React from 'react'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

// Swiper styles
import 'swiper/css'

import img1 from "../../assets/img/people/Anuved1.png"
import img2 from "../../assets/img/people/bni1.png"
import img3 from "../../assets/img/people/Dr.-Gaikwad 1.png"
import img4 from "../../assets/img/people/nafscob1.png"
import img5 from "../../assets/img/people/Soupherb1.png"

const UnderstoodPeople = () => {
  return (
    <div className='understood'>
      <div className="container1">

        <div className="understoodhed">
          <p>
            What began as a small digital agency slowly evolved into <br />
            a place where we didn’t just design websites or logos…
          </p>
          <h3>we understood people.</h3>
        </div>

        <div className='imgboe'>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}   // 👉 gap (8px each side ≈ 16 total)
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            breakpoints={{
              0: {
                slidesPerView: 1
              },
              480: {
                slidesPerView: 2
              },
              768: {
                slidesPerView: 3
              },
              991: {
                slidesPerView: 5
              }
            }}
          >

            <SwiperSlide>
              <img src={img1} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={img3} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={img4} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={img5} alt="" />
            </SwiperSlide>

          </Swiper>
        </div>

      </div>
    </div>
  )
}

export default UnderstoodPeople