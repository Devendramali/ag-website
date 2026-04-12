import React from 'react'
import ak from "../../assets/img/ag.png"

const join = () => {
  return (
    <div className='join position-relative p-90'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="conefrem">
                    <img src={ak} alt="" /> 
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="contatde">
                        <div className='joinheading'>
                            <p className='consub'>Building for Bharat</p>
                            <h2>Join the Movement</h2>
                            <p className='down mb-1'>
                                A movement to empower founders, creators, and dreamers from Tier 2 & 3 India.  </p>  
                                <p className='down'>
                                Building community, mindset, and digital tools to help them stay in the game.
                                </p>
                        </div>
                        <div className="joinform">
                            <h3>Register Now</h3>
                            <form className='fromhome'>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" placeholder='name' />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" placeholder='email' />
                                    </div>
                                    <div className="col-lg-12">
                                       <a href="#!" className="btn4">submit</a>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default join