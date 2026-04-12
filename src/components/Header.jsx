import React from 'react'
import logo from "../assets/img/logo.png"

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='head-container'>
          <div className='row'>
            <div className="col-lg-2">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="menu">
                <ul>
                  <li><a href="#!">Brand Soul</a></li>
                  <li><a href="#!">Building For Bharat</a></li>
                  <li><a href="#!">Learn with AG</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <a href="" className='btn1'>Work With Me</a>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Header