import React from 'react'
import img1 from "../../assets/img/people/Anuved1.png"
import img2 from "../../assets/img/people/bni1.png"
import img3 from "../../assets/img/people/Dr.-Gaikwad 1.png"
import img4 from "../../assets/img/people/nafscob1.png"
import img5 from "../../assets/img/people/Soupherb1.png"
const UnderstoodPeople = () => {
  return (
    <div className='understood'>
      <div className="container1">
        <div className="understoodhed">
          <p>What began as a small digital agency slowly evolved into <br />
           a place where we didn’t just design websites or logos… </p>
          <h3>we understood people.</h3>
        </div>
        <div className='imgboe'>
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnderstoodPeople