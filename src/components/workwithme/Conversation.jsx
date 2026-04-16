import React from 'react'
import wwml from "../../assets/img/wwml.png"

const Conversation = () => {
  return (
    <div className='conversation'>
        <div className="container1">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-7">
                    <figure>
                        <img src={wwml} alt="" />
                    </figure>
                </div>
                <div className="col-lg-4 col-md-7">
                    <div className="mainthot">
                        <div className="thot">
                            <h3>I don’t chase projects. <br />
                                I attract alignment.<br />
                                If you feel this,<br />
                                then maybe we’re meant to build something timeless.
                                </h3>
                                <p>— Alkesh Gupta </p>
                        </div>
                            <a href="#!" className='btn2 me-auto ms-0 glodenborder'>Let’s Start the Conversation <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 7H17M17 7V17M17 7L7 17" stroke="white" stroke-width="1.6" stroke-linecap="square"/>
                            </svg></span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Conversation