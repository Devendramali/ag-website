import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay,Pagination  } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

import g1 from "../../assets/img/ream/soul1.png"
import g2 from "../../assets/img/ream/soul2.png"

const Soulcard = () => {
  return (
    <>
      <div className="soulmain">
        <div className="soulcard cardsoul1">
          <div className="container1">
            <div className="row">
              <div className="col-lg-6">
                <div className="left">
                  <div className="slgead">
                    <h2>Soul</h2>
                    <p>
                      To ensure the brand looks, sounds, and behaves like
                      itself, everywhere.
                    </p>
                  </div>

                  <div className="greencard">
                    <h3>The emotional truth of the brand</h3>
                    <p>
                      Every brand carries an unseen core, its emotional code.
                      This is not positioning language. It is the founder’s
                      non-negotiable truth
                    </p>

                    <div className="flotext">
                      <div className="subcontext">
                        <span>It Includes</span>
                      </div>

                      <ul>
                        <li>Brand behavior frameworks</li>
                        <li>Design psychology</li>
                        <li>Conversion architecture</li>
                        <li>Information hierarchy</li>
                        <li>Platform and system logic</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                  <div className="cradwhite">
                  <h2>Brand Visual Identity & Voice Tonality</h2>

                  <div className="flotext">
                    <div className="subcontext">
                      <span>It Includes</span>
                    </div>

                    <ul>
                      <li>Brand discovery & archetype mapping</li>
                      <li>Logo and identity systems</li>
                      <li>Brand prism and guidelines</li>
                      <li>Collaterals and brand assets</li>
                      <li>Communication and visual tone</li>
                    </ul>
                  </div>
                </div>
               

                <div className="imgslider">
                  <h2>Example</h2>

                  <div className="slidercontainer">
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      spaceBetween={20}
                      slidesPerView={2}
                    //   dots={true}
                      loop={true}
                      speed={1000}
                        pagination={{
                            clickable: true,
                        }}
                      autoplay={{
                        // delay: 2000,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div className="sliderimg1">
                          <img src={g1} alt="" />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="sliderimg1">
                          <img src={g2} alt="" />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="sliderimg1">
                          <img src={g1} alt="" />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="sliderimg1">
                          <img src={g2} alt="" />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="soulcard cardsoul1">
          <div className="container1">
            <div className="row">
              <div className="col-lg-6">
                <div className="left">
                  <div className="slgead">
                    <h2>Science</h2>
                    <p>
                     To ensure the brand looks, sounds, and behaves like itself, everywhere.
                    </p>
                  </div>

                  <div className="greencard">
                    <h3>Giving A structure to meaning</h3>
                    <p>
                      Emotion creates movement.Structure sustains it.
                        Science is where clarity becomes repeatable.
                        Here, my team applies systems thinking, behavioral insight, and strategic design to ensure the brand doesn’t collapse under its own growth.
                    </p>

                    <div className="flotext">
                      <div className="subcontext">
                        <span>It Includes</span>
                      </div>

                      <ul>
                        <li>Brand behavior frameworks</li>
                        <li>Design psychology</li>
                        <li>Conversion architecture</li>
                        <li>Information hierarchy</li>
                        <li>Platform and system logic</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                 <div className="cradwhite">
                  <h2>Digital Infrastructure & Systems</h2>

                  <div className="flotext">
                    <div className="subcontext">
                      <span>It Includes</span>
                    </div>

                    <ul>
                      <li>Websites and web platforms</li>
                      <li>Mobile and custom applications</li>
                      <li>ERP, CRM, DMS systems</li>
                      <li>AI and automation layers</li>
                      <li>Hosting, maintenance, and scaling support</li>
                    </ul>
                  </div>
                </div>

                <div className="imgslider">
                  <h2>Example</h2>

                  <div className="slidercontainer">
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      spaceBetween={20}
                      slidesPerView={2}
                    //   dots={true}
                      loop={true}
                      speed={1000}
                        pagination={{
                            clickable: true,
                        }}
                      autoplay={{
                        // delay: 2000,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div className="sliderimg1">
                          <img src={g1} alt="" />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="sliderimg1">
                          <img src={g2} alt="" />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="sliderimg1">
                          <img src={g1} alt="" />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="sliderimg1">
                          <img src={g2} alt="" />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="soulcard cardsoul1">
          <div className="container1">
            <div className="row">
              <div className="col-lg-6">
                <div className="left">
                  <div className="slgead">
                    <h2>Scale</h2>
                    <p>
                      To turn digital touchpoints into calm, intuitive brand experiences.
                    </p>
                  </div>

                  <div className="greencard">
                    <h3>Conscious, measurable evolution</h3>
                    <p>
                      
Strong brands don’t just grow louder.They grow clearer. <br />
Scale is not about more content, more ads, or more noise.It’s about expanding without dilution. <br />
At this stage, we track not only performance,but perception.
                    </p>

                    <div className="flotext bixul">
                      <div className="subcontext">
                        <span>It Includes</span>
                        <span>Beyond Observation</span>
                      </div>

                      <ul>
                        <li>How trust is forming</li>
                        <li>How memory is building</li>
                        <li>How behavior is shifting over time</li>
                        <li>Brand recall</li>
                        <li>Emotional consistency</li>
                        <li>Visual fatigue or reinforcement</li>
                        <li>Audience alignment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="cradwhite">
                  <h2>Digital Infrastructure & Systems</h2>

                  <div className="flotext">
                    <div className="subcontext">
                      <span>It Includes</span>
                    </div>

                    <ul>
                      <li>Websites and web platforms</li>
                      <li>Mobile and custom applications</li>
                      <li>ERP, CRM, DMS systems</li>
                      <li>AI and automation layers</li>
                      <li>Hosting, maintenance, and scaling support</li>
                    </ul>
                  </div>
                </div>

                <div className="imgslider">
                  <h2>Example</h2>

                  <div className="slidercontainer">
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      spaceBetween={20}
                      slidesPerView={2}
                    //   dots={true}
                      loop={true}
                      speed={1000}
                        pagination={{
                            clickable: true,
                        }}
                      autoplay={{
                        // delay: 2000,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div className="sliderimg1">
                          <img src={g1} alt="" />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="sliderimg1">
                          <img src={g2} alt="" />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="sliderimg1">
                          <img src={g1} alt="" />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="sliderimg1">
                          <img src={g2} alt="" />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Soulcard