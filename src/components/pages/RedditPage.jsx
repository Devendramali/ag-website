import React from 'react'
import RedditFilter from '../reddit/RedditFilter'

import breadcrunb from '../../assets/img/reddit/Frame 237.png'
const RedditPage = () => {
 
  return (
    <> <div className="breadcrumb">
                <img src={breadcrunb} alt="" />
                <div className="brudcont">
                    <h2>The unfiltered corner of the internet. Where I answer questions founders don’t ask publicly</h2>
                </div>
            </div>

                        <RedditFilter />
                    
    </>
  )
}

export default RedditPage