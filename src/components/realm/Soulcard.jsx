import React from 'react'
import g1 from "../../assets/img/ream/g1.png"
import g2 from "../../assets/img/ream/g2.png"
import g3 from "../../assets/img/ream/g3.png"
import g4 from "../../assets/img/ream/g4.png"
import g5 from "../../assets/img/ream/g5.png"
import g6 from "../../assets/img/ream/g6.png"
import g from "../../assets/img/ream/g.png"

const Soulcard = () => {
  return (<>
    <div className='soulmain'>
        <div className="soulcard cardsoul1">
            <div className="container">
                <div className="cardhed">
                    <h2 className='num'>01</h2>
                    <h2 className="heading1">Soul</h2>
                    <p>To ensure the brand looks, sounds, and behaves like itself, everywhere.</p>

                </div>
                <div className="soulcardbody">
                    <h3>The emotional truth of the brand</h3>
                    <p>Every brand carries an unseen core, its <br /> emotional code. <br />
                        This is not positioning language. <br /> It is the founder’s non-negotiable truth</p>

                        <div className="include">
                            <h4>Includes</h4>
                            <ul>
                                <li>Brand discovery & archetype mapping</li>
                                <li>Logo and identity systems</li>
                                <li>Brand prism and guidelines</li>
                                <li>Communication and visual tone</li>
                                <li>Collaterals and brand assets</li>
                            </ul>
                        </div>
                        <div className='cardgallery include mt-0'>
                            <h4>Examples</h4>
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src={g1} alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <img src={g3} alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <img src={g2} alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <img src={g} alt="" />
                                </div>
                            </div>

                        </div>
                </div>
            </div>
        </div>
            <div className="soulcard cardsoul2">
            <div className="container">
                <div className="cardhed">
                    <h2 className='num'>01</h2>
                    <h2 className="heading1">Soul</h2>
                    <p>To ensure the brand looks, sounds, and behaves like itself, everywhere.</p>

                </div>
                <div className="soulcardbody">
                    <h3 className='marlet0'>The emotional truth of the brand</h3>
                    <p>Every brand carries an unseen core, its <br /> emotional code. <br />
                        This is not positioning language. <br /> It is the founder’s non-negotiable truth</p>

                        <div className="include ">
                            <h4>Includes</h4>
                            <ul>
                                <li>Brand discovery & archetype mapping</li>
                                <li>Logo and identity systems</li>
                                <li>Brand prism and guidelines</li>
                                <li>Communication and visual tone</li>
                                <li>Collaterals and brand assets</li>
                            </ul>
                        </div>
                        
                </div>
                <hr className='bg-white mt-5' />
                    <div className="soulcardbody mt-5">
                    <h3 className='p-0     text-start'>Digital Infrastructure & Systems</h3>
                    

                        <div className="include darkpo">
                            <h4>Includes</h4>
                            <ul>
                                <li>Brand discovery & archetype mapping</li>
                                <li>Logo and identity systems</li>
                                <li>Brand prism and guidelines</li>
                                <li>Communication and visual tone</li>
                                <li>Collaterals and brand assets</li>
                            </ul>
                        </div>
                        <div className='cardgallery include mt-0'>
                            <h4>Examples</h4>
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src={g4} alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <img src={g5} alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <img src={g} alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <img src={g} alt="" />
                                </div>
                            </div>

                        </div>
                </div>
            </div>
        </div>
           <div className="soulcard cardsoul2 cardsoul3">
            <div className="container">
                <div className="cardhed">
                    <h2 className='num'>01</h2>
                    <h2 className="heading1">Soul</h2>
                    <p>To ensure the brand looks, sounds, and behaves like itself, everywhere.</p>

                </div>
                <div className="soulcardbody">
                    <h3 className='marlet0'>The emotional truth of the brand</h3>
                    <p>Every brand carries an unseen core, its <br /> emotional code. <br />
                        This is not positioning language. <br /> It is the founder’s non-negotiable truth</p>

                        <div className="include ">
                            <h4>Includes</h4>
                            <ul>
                                <li>Brand discovery & archetype mapping</li>
                                <li>Logo and identity systems</li>
                                <li>Brand prism and guidelines</li>
                                <li>Communication and visual tone</li>
                                <li>Collaterals and brand assets</li>
                            </ul>
                        </div>
                        
                </div>
                <hr className='bg-white mt-5' />
                    <div className="soulcardbody mt-5">
                    <h3 className='p-0     text-start'>Digital Infrastructure & Systems</h3>
                    

                        <div className="include darkpo">
                            <h4>Includes</h4>
                            <ul>
                                <li>Brand discovery & archetype mapping</li>
                                <li>Logo and identity systems</li>
                                <li>Brand prism and guidelines</li>
                                <li>Communication and visual tone</li>
                                <li>Collaterals and brand assets</li>
                            </ul>
                        </div>
                        <div className='cardgallery include mt-0'>
                            <h4>Examples</h4>
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src={g6} alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <img src={g} alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <img src={g} alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <img src={g} alt="" />
                                </div>
                            </div>

                        </div>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Soulcard