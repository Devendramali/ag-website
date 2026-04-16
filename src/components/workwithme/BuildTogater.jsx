import React from 'react'
import img1 from "./../../assets/img/soul/1.png"
import img2 from "./../../assets/img/soul/2.png"
import img3 from "./../../assets/img/soul/3.png"

const BuildTogater = () => {
  return (
    <>
    <div className="togater">
        <div className="container1">
            <h3>WHAT WE CAN BUILD TOGETHER</h3>
            <div className="row">
                <div className="col-lg-4">
                    <div className="tocontainer">
                        <h4>How your brand looks to the world.</h4>
                        <figure>
                            <img src={img1} alt="" />
                        </figure>

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="tocontainer">
                        <h4>Where your brand interacts with the world.</h4>
                        <figure>
                            <img src={img2} alt="" />
                        </figure>

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="tocontainer">
                        <h4>How your brand stays in the world.</h4>
                        <figure>
                            <img src={img3} alt="" />
                        </figure>

                    </div>
                </div>
            </div>
            <div className='mt-50'>
                      <a href="#" class="btn3 m-auto glodenborderligit">let’s design your full transformation together
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="#052C27" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="24" fill="#052C27" fill-opacity="0.8"/>
                                <path d="M19 19H29M29 19V29M29 19L19 29" stroke="#ffffff" stroke-width="1.6" stroke-linecap="square"/>
                                </svg>
                            </a>
            </div>

        </div>
    </div>
    
    </>
  )
}

export default BuildTogater