import React from 'react'
import card1 from "../../assets/img/reddit/reddit.png"

const ArticleCard = ({item}) => {
  return (
    <a href='#!' className='redditcard articlecard'>
        <div className="reditcontent articlecontent">
            <h2>{item.title}</h2>
            <a href={item.link} className="btn3">
                Read the Article <svg className='ms-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 7H17M17 7V17M17 7L7 17" stroke="#052C27" stroke-width="1.6" stroke-linecap="square"/>
                </svg>
            </a>
        </div>
    </a>
  )
}

export default ArticleCard