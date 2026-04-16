import React from 'react'
import Form1 from '../form/Form1'

const LetsBeginWithClarity = () => {
  return (
    <div className='beingwithclarity'>
        <div className="container1">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 ">
                    <div className="formhead">
                        <h2>Let’s begin with clarity.</h2>
                        <p>Tell me a bit about your world , what you’re building, what you’re dreaming of and where you feel stuck right now.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-8">
                    <div className="form">
                        <Form1/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LetsBeginWithClarity