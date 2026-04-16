import React from 'react'
import banner1 from "../../assets/img/workbanner.png"

const WorkBanner = () => {
  return (
    <>
        <div className="workbanner">
            <figure>
                <img src={banner1} alt="" />
            </figure>
            <div className='banner-containt'>
                <div className="conth3">
                    <h3>“If you’re looking for <span>someone</span> who’ll just deliver a project,I’m not your guy.”</h3>
                    <h3>“But if you’re looking for someone <span>who’ll understand</span> your <span>brand’s soul</span> and build around it then let’s talk.”</h3>

                    <div className='d-flex justify-content-center bannerbtn'>
                        <a href="#" class="btn3 ms-0 graybg">See My Approach
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="24" fill="white" fill-opacity="0.8"/>
                                <path d="M19 19H29M29 19V29M29 19L19 29" stroke="#151515" stroke-width="1.6" stroke-linecap="square"/>
                                </svg>
                            </a>
                          <a href="#!" className='btn2 mr-auto ms-0 glodenborder'>Start a Conversation <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7H17M17 7V17M17 7L7 17" stroke="white" stroke-width="1.6" stroke-linecap="square"/>
            </svg></span></a>
                    </div>
                </div>

            </div>

        </div>
    </>
  )
}

export default WorkBanner