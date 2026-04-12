import { useEffect } from "react"
import s1 from "../../assets/img/series/1.png"
import s2 from "../../assets/img/series/2.png"
import s3 from "../../assets/img/series/3.png"
import s4 from "../../assets/img/series/4.png"

const Series = () => {
    useEffect(() => {
  const cursor = document.querySelector(".custom-cursor2")
  const cards = document.querySelectorAll(".secard2")

  const moveCursor = (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"
  }

  const showCursor = () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)"
  }

  const hideCursor = () => {
    cursor.style.transform = "translate(-50%, -50%) scale(0)"
  }

  window.addEventListener("mousemove", moveCursor)

  cards.forEach((card) => {
    card.addEventListener("mouseenter", showCursor)
    card.addEventListener("mouseleave", hideCursor)
  })

  return () => {
    window.removeEventListener("mousemove", moveCursor)
  }
}, [])
  return (
    <>
       <div className='series'>
        <div className="container">
            <p>Every brand, every initiative, every experiment you <br /> see here — was born from one shared belief:</p>
        </div>
        <div className="seriescont container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="secard2">
                        <img src={s1} alt="" />

                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="secard2">
                        <img src={s2} alt="" />

                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="secard2">
                        <img src={s3} alt="" />

                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="secard2">
                        <img src={s4} alt="" />

                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-5">
               <a href="#" className="btn3">Checkout <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="24" fill="white" fill-opacity="0.15"/>
            <path d="M19 19H29M29 19V29M29 19L19 29" stroke="white" stroke-width="1.6" stroke-linecap="square"/>
            </svg>
            </a>
        </div>

    </div>
    
    <div className="custom-cursor2">
  <h3>View<br/>Series</h3>
</div></>
 
  )
}

export default Series