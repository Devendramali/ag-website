import React from 'react'
import videoBg from "../../assets/img/video.mp4" // your video path
const Banner = () => {
  return (
    <div className='home-banner p-90'>
           {/* Background Video */}
 
        {/* <div className='container bigtext'>
             
            <div className='textvideo'>

                <div className='d-flex'>
                    <h1>Brand</h1>
                    <h1>Soul</h1>
                </div>
                <h1 className='text-2z'>Alchemist</h1>
            </div>
                

           
        </div> */}
        <div
                className="container bigtext"
                >
                <video
                    className="banner-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={videoBg} type="video/mp4" />
                </video>

                <div className="textvideo">
                    <div className="d-flex">
                    <h1>Brand</h1>
                    <h1>Soul</h1>
                    </div>

                    <h1 className="text-2z">Alchemist</h1>
                </div>
                </div>
        <div className="bannerpara  p-60  pb-0">
            <div className="container">

            
            <div className="row justify-content-between items-center">
                <div className="col-lg-6">
                    <div className='d-flex align-items-center h-100'>
                        <p>Bringing out the soul within every brand where <br /> meaning, emotion, and identity become one.</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <a href="#!" className='btn2'>Let Connect <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7H17M17 7V17M17 7L7 17" stroke="white" stroke-width="1.6" stroke-linecap="square"/>
            </svg></span></a>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Banner