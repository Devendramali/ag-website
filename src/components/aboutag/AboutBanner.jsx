import React from 'react'
import banner1 from "../../assets/img/workbanner.png"

const AboutBanner = () => {
  return (
    <>
        <div className="workbanner aboutag">
            <figure>
                <img src={banner1} alt="" />
            </figure>
            <div className='banner-containt'>
                <div className="conth3">
                    <h3>Hi, I’m <span>Alkesh Gupta</span> — a Founder, <br /> Creator, and Soul Alchemist.</h3>
                   
                </div>

            </div>

        </div>
    </>
  )
}

export default AboutBanner