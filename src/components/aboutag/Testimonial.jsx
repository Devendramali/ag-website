
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay  } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

import p1 from "../../assets/img/series/1.png"
import p2 from "../../assets/img/series/2.png"
import p3 from "../../assets/img/series/3.png"
import client from "../../assets/img/client.png"

const testimonials = [
  {
    text: "He understands people — and that changes everything.",
    name: "Dr. Gaikwad",
    role: "The Smile Architect",
    img: p1
  },
  {
    text: "Working with Alkesh doesn’t feel like outsourcing. It feels like building together.",
    name: "Suman Vyas",
    role: "Project Head, DigiliHost",
    img: p2
  },
  {
    text: "He never talks about trends. He talks about truth. And somehow, that always works.",
    name: "Siddhant Jadhav",
    role: "Graphics & Content Lead",
    img: p3
  },
    {
    text: "He understands people — and that changes everything.",
    name: "Dr. Gaikwad",
    role: "The Smile Architect",
    img: p1
  },
  {
    text: "Working with Alkesh doesn’t feel like outsourcing. It feels like building together.",
    name: "Suman Vyas",
    role: "Project Head, DigiliHost",
    img: p2
  },
  {
    text: "He never talks about trends. He talks about truth. And somehow, that always works.",
    name: "Siddhant Jadhav",
    role: "Graphics & Content Lead",
    img: p3
  },  {
    text: "He understands people — and that changes everything.",
    name: "Dr. Gaikwad",
    role: "The Smile Architect",
    img: p1
  },
  {
    text: "Working with Alkesh doesn’t feel like outsourcing. It feels like building together.",
    name: "Suman Vyas",
    role: "Project Head, DigiliHost",
    img: p2
  },
  {
    text: "He never talks about trends. He talks about truth. And somehow, that always works.",
    name: "Siddhant Jadhav",
    role: "Graphics & Content Lead",
    img: p3
  }
]

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <div className="container text-center">

        <h2>What People Say</h2>

        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3.5}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            breakpoints={{
                0: { slidesPerView: 1.2 },
                576: { slidesPerView: 2.2 },
                992: { slidesPerView: 3.5 }, // 👈 keep half visible
            }}
        >

          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial-card">

                <p className="quote">“{item.text}”</p>

                <div className="user">
                  <img src={item.img} alt="" />
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}

        </Swiper>

        <a href className="morets">
            <img src={client} alt="" />
            More
        <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7 7H17M17 7V17M17 7L7 17" stroke="#F5F5F5" stroke-width="1.6" stroke-linecap="square"/>
</svg>
        </div>
        </a>

      </div>
    </div>
  )
}

export default Testimonial