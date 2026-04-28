import React from 'react'
import ArticleCard from '../cards/ArticleCard'

const Longform = () => {
    const rediit_list = [
        {
            title: "Innovative designs lead to creative solutions",
            para: "Systematic lessons from real experiences",
            Link: "",
            className:"col-lg-6 col-md-6"
        },

        {
            title: "Sustainability in tech: A necessary shift",
            para: "Systematic lessons from real experiences",
            Link: "",
            className:"col-lg-3 col-md-6"
        },
        {
            title: "AI isn’t cheating — it’s evolution",
            para: "Systematic lessons from real experiences",
            Link: "",
            className:"col-lg-3 col-md-6"
        },
        {
            title: "The future of work is collaboration, not competition",
            para: "Systematic lessons from real experiences",
            Link: "",
            className:"col-lg-3 col-md-6"
        },
       {
            title: "Innovative designs lead to creative solutions",
            para: "Systematic lessons from real experiences",
            Link: "",
            className:"col-lg-3 col-md-6"
        },

        {
            title: "Sustainability in tech: A necessary shift",
            para: "Systematic lessons from real experiences",
            Link: "",
            className:"col-lg-6 col-md-6"
        },
        
    ]
  return (
    <div className='founderwisdom  pb-70px'>
        <div className="container1">
             <h2 className='heading'>The Founder Wisdom Vault</h2>
             <div className="row longgrid">
                 {
                        rediit_list.map((item,index) => (
                            <div className={`${item.className} `}>
                                <ArticleCard  item={item}/>
                            </div>
                        ))
                    }
             </div>
        </div>

    </div>
  )
}

export default Longform