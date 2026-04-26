import React from 'react'
import imggrand1 from "../../assets/img/ag/Rectangle 463.png"
import imggrand2 from "../../assets/img/ag/Rectangle 464.png"
import imggrand3 from "../../assets/img/ag/Rectangle 465.png"
const Manifesto = () => {
  return (
    <div className='manifesto'>
        <h2 className='headimg1'>The Brand Soul Manifesto</h2>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <figure className='brandimg'>
                        <img src={imggrand1} alt="" />
                    </figure>
                </div>
                <div className="col-lg-8">
                    <div className="brandcont leftbox">
                        <h3>A <span>brand</span> is</h3>
                        <h3>not a logo.</h3>
                        <h3>It’s a living system </h3>
                        <h3> of emotion </h3>
                        <h3>and intention.</h3>

                        <h3 className='mobiletext'>A <span>brand</span> is not a logo.It’s a living system of emotion  and intention.</h3>
                    </div>
                </div>
            </div>
            <div className="row mt-100">
                   <div className="col-lg-8 ">
                    <div className="brandcont right">
                        <h3>A <span>founder</span> is </h3>
                        <h3>not a title. </h3>   
                        <h3> It’s the discipline</h3> 
                            <h3>     to build </h3> 
                                <h3>    what others only </h3> 
                                <h3>      imagine.</h3>
                                <h3 className='mobiletext'>A <span>founder</span> is  not a title. It’s the discipline  to build  what others only  imagine.</h3>
                    </div>
                </div>
                <div className="col-lg-4">
                    <figure className='brandimg'>
                        <img src={imggrand2} alt="" />
                    </figure>
                </div>
             
            </div>
            <div className="row mt-100">
                <div className="col-lg-4">
                    <figure className='brandimg'>
                        <img src={imggrand3} alt="" />
                    </figure>
                </div>
                <div className="col-lg-8">
                    <div className="brandcont lastbox">
                        <h3>          And <span>business</span> is </h3>
                        <h3>not about the market</h3>
                        <h3> It’s about </h3>
                        <h3>   the value </h3>
                        <h3>  you choose to create, </h3>
                        <h3>  consistently</h3>
                        <h3 className="mobiletext">And <span>business</span> is not about the market  It’s about  the value you choose to create,  consistently</h3>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Manifesto