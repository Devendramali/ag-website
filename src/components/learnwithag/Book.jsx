import React from 'react'
import book from "../../assets/img/book.png"

const Book = () => {
  return (
    <div className='book'>
            <h2 className='heading'>Practical guides. No jargon. Built for real-world use.</h2>
        <div className="container1">
            <div className="row">
                <div className="col-lg-5">
                    <figure className='mb-0'>
                        <img className='w-100 h-100' src={book} alt="" />
                    </figure>
                </div>
                <div className="col-lg-7">
                    <div className="book-content">
                        <h3>How to Build a Soulful Brand</h3>
                        <p>The unfiltered corner of the internet.
Where I answer questions founders don’t ask publicly</p>
<a href="#!" class="btn2  glodenborder">Download Free E-Book <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7H17M17 7V17M17 7L7 17" stroke="white" stroke-width="1.6" stroke-linecap="square"></path></svg></span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Book