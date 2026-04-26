import React from 'react'
import Redditcard from '../cards/Redditcard'


const RedditFilter = () => {
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
        <div className='reditfilter'>
           
            <div className="container">
                <fiv className="filterdiv">
                    <div className="search">
                        <input type="text" className='search' placeholder='search' />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z" stroke="#1E1E1E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>
                    <button>Sort <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clip-path="url(#clip0_1092_581)">
                            <path d="M2.66406 14V9.33333M2.66406 6.66667V2M7.9974 14V8M7.9974 5.33333V2M13.3307 14V10.6667M13.3307 8V2M0.664062 9.33333H4.66406M5.9974 5.33333H9.9974M11.3307 10.6667H15.3307" stroke="#1E1E1E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1092_581">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                        </defs>
                        </svg></button>
                        <button>
                            Filters <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M4 6L8 10L12 6" stroke="#1E1E1E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                </fiv>
                <div className="row">
                    {
                        rediit_list.map((item,index) => (
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <Redditcard  item={item}/>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default RedditFilter