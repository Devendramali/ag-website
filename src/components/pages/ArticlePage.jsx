import React from 'react'
import RedditFilter from '../reddit/RedditFilter'

import breadcrunb from '../../assets/img/reddit/article.png'
import ArticleFilter from '../article/ArticleFilter'
const ArticlePage = () => {
 
  return (
    <> <div className="breadcrumb">
                <img src={breadcrunb} alt="" />
                <div className="brudcont">
                    <h2>Long-form thoughts for those who want to go deeper.</h2>
                </div>
            </div>

                        <ArticleFilter />
                    
    </>
  )
}

export default ArticlePage