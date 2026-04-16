import React from 'react'

const Form1 = () => {
  return (
    <>
    <div className="form">
      <div className="row">
        <div className="col-lg-6">
          <input type="text" className='form-control' placeholder='name' />
        </div>
        <div className="col-lg-6">
          <input type="text" className='form-control' placeholder='email' />
        </div>
        <div className="col-lg-6">
          <input type="text"  className='form-control' placeholder='company' />
        </div>
        <div className="col-lg-6">
          <div className='custon-select'>

            
            <select name="" id="" className='form-control form-select'>
              <option value="">city</option>
              <option value="">Pune</option>
              <option value="">Mumbai</option>
            </select>
            <div className="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
                <mask id="path-1-inside-1_817_149" fill="white">
                  <path d="M0 0L5 5L10 0"/>
                </mask>
                <path d="M0 0L5 5L10 0" fill="#5C5C5C"/>
                <path d="M1.41421 -1.41421C0.633165 -2.19526 -0.633165 -2.19526 -1.41421 -1.41421C-2.19526 -0.633165 -2.19526 0.633165 -1.41421 1.41421L0 0L1.41421 -1.41421ZM5 5L3.58579 6.41421C4.36684 7.19526 5.63316 7.19526 6.41421 6.41421L5 5ZM11.4142 1.41421C12.1953 0.633165 12.1953 -0.633165 11.4142 -1.41421C10.6332 -2.19526 9.36683 -2.19526 8.58579 -1.41421L10 0L11.4142 1.41421ZM0 0L-1.41421 1.41421L3.58579 6.41421L5 5L6.41421 3.58579L1.41421 -1.41421L0 0ZM5 5L6.41421 6.41421L11.4142 1.41421L10 0L8.58579 -1.41421L3.58579 3.58579L5 5Z" fill="#5C5C5C" mask="url(#path-1-inside-1_817_149)"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className='custon-select'>

            
            <select name="" id="" className='form-control form-select'>
              <option value="">select service</option>
              <option value="">Pune</option>
              <option value="">Mumbai</option>
            </select>
            <div className="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
                <mask id="path-1-inside-1_817_149" fill="white">
                  <path d="M0 0L5 5L10 0"/>
                </mask>
                <path d="M0 0L5 5L10 0" fill="#5C5C5C"/>
                <path d="M1.41421 -1.41421C0.633165 -2.19526 -0.633165 -2.19526 -1.41421 -1.41421C-2.19526 -0.633165 -2.19526 0.633165 -1.41421 1.41421L0 0L1.41421 -1.41421ZM5 5L3.58579 6.41421C4.36684 7.19526 5.63316 7.19526 6.41421 6.41421L5 5ZM11.4142 1.41421C12.1953 0.633165 12.1953 -0.633165 11.4142 -1.41421C10.6332 -2.19526 9.36683 -2.19526 8.58579 -1.41421L10 0L11.4142 1.41421ZM0 0L-1.41421 1.41421L3.58579 6.41421L5 5L6.41421 3.58579L1.41421 -1.41421L0 0ZM5 5L6.41421 6.41421L11.4142 1.41421L10 0L8.58579 -1.41421L3.58579 3.58579L5 5Z" fill="#5C5C5C" mask="url(#path-1-inside-1_817_149)"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <textarea name="" className='form-control' placeholder="Tell Me What’s On Your Mind" cols="12" rows={5} id=""></textarea>
        </div>
        <div className="col-lg-12">
         <button className='form-btn'>submit</button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Form1