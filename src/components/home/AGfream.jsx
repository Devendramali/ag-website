import React from 'react'
import ag from "../../assets/img/ag/ag.jpg"
import fream from "../../assets/img/ag/frame.png"

const AGfream = () => {
  return (
    <div className='agfream'>
        <div className='mainimg'>
            <img src={ag} alt="" />
        </div>
        <div className='fream'>
            <img src={fream} alt="" />
        </div>
        <div className="freamcontent">
          <div className="position-relative">
            <h2>Behind every strategy, there’s a story.</h2>
            <p className="para1">
              10+ Years of Building Across Sectors — From local entrepreneurs to legacy institutions
            </p>
            <p className='para2'>
              Founder DiigiiHost  <br />
              Creator The Brand Soul Philosophy
            </p>
            <p className='para3'>
              Mission: Building Bharat Through Brand, Tech & Soul
            </p>
            <a href="#!" className='readmore'>Read More <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="24" fill="white" fill-opacity="0.15"/>
          <path d="M19 19H29M29 19V29M29 19L19 29" stroke="white" stroke-width="1.6" stroke-linecap="square"/>
          </svg></a>
          </div>
        </div>

    </div>
  )
}

export default AGfream