import React from 'react'
import ArticleCard from '../cards/ArticleCard'
import Redditcard from '../cards/Redditcard'
import redit from "../../assets/img/Reddit.svg"

const Articlesection = () => {
     const rediit_list = [
        {
            title: "The Other Side of Building",
            para: "Systematic lessons from real experiences",
            Link: ""
        },

        {
            title: "The Other Side of Building",
            para: "Systematic lessons from real experiences",
            Link: ""
        },
        {
            title: "The Other Side of Building",
            para: "Systematic lessons from real experiences",
            Link: ""
        },
        {
            title: "The Other Side of Building",
            para: "Systematic lessons from real experiences",
            Link: ""
        },
    ]
  return (
    <div className='articlesection'>
        <div className="container">
            <h2 className="heading text-white">
                The unfiltered corner of the internet. <br />
Where I answer questions founders don’t ask publicly

            </h2>
              <div className="row gap-y-4">
                    {
                        rediit_list.map((item,index) => (
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <Redditcard  item={item}/>
                            </div>
                        ))
                    }
                </div>
                 <a href="#" class="btn3 glodenborder m-auto mt-5  graybg">Ask A Question <img src={redit} alt="" /></a>
      
        </div>

    </div>
  )
}

export default Articlesection