import React from 'react'
import Redditcard from '../cards/Redditcard'
import MiniSeriexSlider from '../cards/MiniSeriexSlider'
import s1 from "../../assets/img/reddit/1.png"
import s2 from "../../assets/img/reddit/2.png"
import s3 from "../../assets/img/reddit/3.png"
import s4 from "../../assets/img/reddit/4.png"
import s5 from "../../assets/img/reddit/5.png"
import s6 from "../../assets/img/reddit/6.png"
import s7 from "../../assets/img/reddit/7.png"
import s8 from "../../assets/img/reddit/8.png"
import s9 from "../../assets/img/reddit/9.png"
import s10 from "../../assets/img/reddit/10.png"
import s11 from "../../assets/img/reddit/11.png"

const FounderWisdomVaultFilter = () => {
    const realshit ={
        heading:"The Other Side",
        slider:[
            s1,
            s2,
            s3,
            s4,
        ]
    }
       const TheOtherSide ={
        heading:"The Other Side",
        slider:[
            s5,
            s6,
            s7,
            s7,
        ]
    }
      const WeekendMindset ={
        heading:"The Real Shit",
        slider:[
            s8,
            s9,
            s10,
            s11,
        ]
    }
  
    return (
        <div className='reditfilter'>
           
            <div className="container">
                <div className="filterdiv">
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
                </div>
                <MiniSeriexSlider item={realshit}/>
                <MiniSeriexSlider item={TheOtherSide}/>
                <MiniSeriexSlider item={WeekendMindset}/>
            </div>

        </div>
    )
}

export default FounderWisdomVaultFilter