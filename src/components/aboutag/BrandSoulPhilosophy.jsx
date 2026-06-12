import React from 'react'
import img1 from "../../assets/img/soul/Brand-identity-setup-1.png"
import img2 from "../../assets/img/soul/Digital-Infrastructure.png"
import img3 from "../../assets/img/soul/Image-re-engineering.png"
const BrandSoulPhilosophy = () => {
  return (
    <div className='understood'>
      <div className="container1">
        <div className="understoodhed">
          <p data-gsap>And somewhere along that path, the idea that defined everything I do was born </p>
          <h2 data-gsap>the Brand Soul Philosophy.</h2>
        </div>
        <div className='brandsolaimg'>
          <div className="row">
            <div className="col-lg-4 col-md-4 mt-5">
              <div className="img">
                <img data-gsap src={img1} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 ">
              <div className="img">
                <img data-gsap src={img2} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mt-5">
              <div className="img">
                <img data-gsap src={img3} alt="" />
              </div>
            </div>
          </div>

          <p data-gsap className='lastparaomd'>Because every brand, just like every human, has a soul. When you find it, align with it, and express it with integrity — <span>it creates movement.</span></p>
          
        </div>
      </div>
    </div>
  )
}

export default BrandSoulPhilosophy