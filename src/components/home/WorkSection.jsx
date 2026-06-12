import React from 'react'
import WorkSectioncard from './WorkSectioncard'

const WorkSection = () => {
  return (
    <div className='worksection pb-0 pt-0'>
        {/* ✅ HEADING */}
      <div className="headpara container" style={{ textAlign: "left", marginBottom: "50px" }}>
       
            <p data-gsap>Every brand, initiative, experiment <br />
                was crafted from one shared belief </p>


            <p data-gsap>soul isn’t an accessory in <br /> business it’s the engine.</p>
  
      
      </div>
      <WorkSectioncard/>


    </div>
  )
}

export default WorkSection