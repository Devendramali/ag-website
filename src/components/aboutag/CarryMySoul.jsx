import React from 'react'
import img1 from "../../assets/img/soul.png"

const CarryMySoul = () => {

    const soullist =[
        {
            title:"DiigiiHost",
            disk:"making digital affordable and human for small businesses"
        },
        {
            title:"Best Rate Websites",
            disk:" making digital affordable and human for small businesses"
        },
        {
            title:"Quote Your Price",
            disk:"empowering choice and transparency"
        },
        {
            title:"Anuved",
            disk:"rediscovering purity through devotion"
        },
        {
            title:"Soupherb",
            disk:"reimagining wellness with purpose"
        },
        {
            title:"NM Fest",
            disk:"giving a city its symbol, its pride, and its global identity."
        },
        {
            title:"Combo Jumbo & COJ",
            disk:"transforming restaurants into communities built on togetherness"
        },
        {
            title:"Learn & Achieve",
            disk:"turning fragmented learning into a nationwide education ecosystem"
        },
        {
            title:"Akirhs",
            disk:"where deep tech finds its voice, and engineering becomes a clear narrative."
        },
        {
            title:"NAFSCOB",
            disk:"strengthening India’s cooperative backbone through transparency and digital clarity."
        },
    ]
  return (
    <div className='carrymysoul'>
        <div className="heading">
            <h2>Brands That Carry My Soul</h2>
            <p>Over the years, I’ve had the privilege of shaping brands that became more <br />
             than businesses — they became movements</p>
        </div>
        <div>
            {
                soullist.map((item,index)=>(
                     <div className="carryitem" key={index}>
                <figure>
                    <img src={img1} alt="" />
                </figure>
                <div className='soulcontnt'>
                    <h1>{item.title}</h1>
                    <p>{item.disk}</p>
                </div>
            </div>
                ))
            }
           
        </div>
    </div>
  )
}

export default CarryMySoul