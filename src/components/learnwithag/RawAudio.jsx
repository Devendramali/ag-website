import React from 'react'
import AudioCard from '../cards/AudioCard'

const RawAudio = () => {
     const rediit_list = [
        {
            id:1,
            title: "The Other Side of Building",
            para: "Systematic lessons from real experiences",
            Link: ""
        },

        {
            id:2,
            title: "The Other Side of Building",
            para: "Systematic lessons from real experiences",
            Link: ""
        },
        {
            id:3,
            title: "The Other Side of Building",
            para: "Systematic lessons from real experiences",
            Link: ""
        },
        {   
            id:4,
            title: "The Other Side of Building",
            para: "Systematic lessons from real experiences",
            Link: ""
        } 
    ]
  return (
    <div className='founderwisdom pt-0 pb-70px'>

        <div className="container">
             <h2 className='heading'>Raw audio. Real minds.</h2>

              
                <div className="row audiorow">
                    {
                        rediit_list.map((item,index) => (
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <AudioCard  item={item}/>
                            </div>
                        ))
                    }
                </div>
                <a href="#!" class="btn2 m-auto mt-5">Listen on Spotify / Youtube <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7H17M17 7V17M17 7L7 17" stroke="white" stroke-width="1.6" stroke-linecap="square"></path></svg></span></a>
         
        </div>
    </div>
  )
}

export default RawAudio