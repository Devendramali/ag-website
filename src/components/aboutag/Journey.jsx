import React from 'react'
import jb from "./../../assets/img/jb.png"

const Journey = () => {
  return (
    <div className='journey'>
        <div className="">
            <h2 className='headban'>My journey didn’t start with a business plan <br /> It started with questions</h2>
            <hr />
        </div>
        <div className="container1">
            <div className="paraj">
                <p>Why do some brands connect deeply while others don’t?</p>
                <p>Why do some founders feel aligned, while others burn out chasing trends?</p>
            </div>
        </div>
        <div className="jbimg">
            <img src={jb} alt="" />
        </div>

    </div>
  )
}

export default Journey