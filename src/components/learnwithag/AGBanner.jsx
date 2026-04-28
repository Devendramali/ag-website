import React from 'react'
import banner1 from "../../assets/img/workbanner.png"

const AGBanner = () => {
  return (
      <div className="workbanner learnbanner">
                <figure>
                    <img src={banner1} alt="" />
                </figure>
                <div className='banner-containt'>
                    <div className="conth3">
                        <h3>Some people teach theory. <br />
                        <span>I teach what I’ve lived.</span></h3>
                        <p>Welcome to Learn with AG, A space where real stories meet real lessons.</p>
                        <a href="#!" class="btn2  glodenborder">Watch Episodes <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7H17M17 7V17M17 7L7 17" stroke="white" stroke-width="1.6" stroke-linecap="square"></path></svg></span></a>
                       
                    </div>
    
                </div>
    
            </div>
  )
}

export default AGBanner