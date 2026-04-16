import React, { useEffect } from 'react'
import rightimg from "../../assets/img/soul/rightman.png"
import leftimg from "../../assets/img/soul/leftman.png"
import brandsetup1 from "../../assets/img/soul/Brand-identity-setup-1.png"
import brandsetup2 from "../../assets/img/soul/Digital-Infrastructure.png"
import brandsetup3 from "../../assets/img/soul/Image-re-engineering.png"


const BrandSoul = () => {
      
  return (
    <>
        <div className="brandsoul">
            <div className="container maxw12">
                <h2>The Brand Soul Way</h2>
                <h3 >Building a brand isn’t just about what <br /> you create it’s about how you think.</h3>
            </div>
            <div className="soulcontainer">
                <div className='bothimg'>
                    <figure>
                        <img src={leftimg} alt="" />
                    </figure>
                    <figure>
                        <img src={rightimg} alt="" />
                    </figure>

                </div>

            </div>
            <div className="soulcont" >
                <div>
                    <div className='soulhead'>
                        <h4>Understanding the Why</h4>
                        <h3>SOUL</h3>
                    </div>
                    <div className='text-cont'>
                        <p>Logo, Identity, Positioning, Brand Prism, Guidelines</p>
                        <figure>
                            <img src={brandsetup2} alt="" />
                        </figure>
                        <p>Every brand has a pulse — beliefs, emotions, psychology, intent. <br />Connection starts with knowing the core.</p>

                    </div>
                </div>
                <div className="bgvsg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="532" viewBox="0 0 6 532" fill="none">
                    <path d="M2.66797 -4.07696e-05C1.19521 -4.07696e-05 0.001302 1.19387 0.001302 2.66663C0.001302 4.13939 1.19521 5.33329 2.66797 5.33329C4.14073 5.33329 5.33464 4.13939 5.33464 2.66663C5.33464 1.19387 4.14073 -4.07696e-05 2.66797 -4.07696e-05ZM2.66797 526C1.19521 526 0.001302 527.194 0.001302 528.667C0.001302 530.139 1.19521 531.333 2.66797 531.333C4.14073 531.333 5.33464 530.139 5.33464 528.667C5.33464 527.194 4.14073 526 2.66797 526ZM2.66797 2.66663H2.16797L2.16797 528.667H2.66797H3.16797L3.16797 2.66663H2.66797Z" fill="#5C5C5C"/>
                    </svg>
                </div>
            </div>
            <div className="soulcont" >
                <div>
                    <div className='soulhead'>
                        <h4>Structuring the How</h4>
                        <h3>SCIENCE</h3>
                    </div>
                    <div className='text-cont'>
                        <p>Websites, Web Apps, Platforms, CRMs, DMS, Blockchain Integrations</p>
                        <figure>
                            <img src={brandsetup3} alt="" />
                        </figure>
                        <p>With clarity, we build what matters — strategy, systems, structure. <br />From identity to digital infrastructure, it’s focused, not more.</p>

                    </div>
                </div>
                <div className="bgvsg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="532" viewBox="0 0 6 532" fill="none">
                    <path d="M2.66797 -4.07696e-05C1.19521 -4.07696e-05 0.001302 1.19387 0.001302 2.66663C0.001302 4.13939 1.19521 5.33329 2.66797 5.33329C4.14073 5.33329 5.33464 4.13939 5.33464 2.66663C5.33464 1.19387 4.14073 -4.07696e-05 2.66797 -4.07696e-05ZM2.66797 526C1.19521 526 0.001302 527.194 0.001302 528.667C0.001302 530.139 1.19521 531.333 2.66797 531.333C4.14073 531.333 5.33464 530.139 5.33464 528.667C5.33464 527.194 4.14073 526 2.66797 526ZM2.66797 2.66663H2.16797L2.16797 528.667H2.66797H3.16797L3.16797 2.66663H2.66797Z" fill="#5C5C5C"/>
                    </svg>
                </div>
            </div>
            <div className="soulcont" >
                <div>
                    <div className='soulhead'>
                        <h4>Creating the Ripple</h4>
                        <h3>SCALE</h3>
                    </div>
                    <div className='text-cont'>
                        <p>Marketing, Social Presence, Series, Campaigns, Performance Tracking</p>
                        <figure>
                            <img src={brandsetup1} alt="" />
                        </figure>
                        <p>Emotion meets momentum — expanding reach through Image Engineering and conscious marketing. <br />Built to stay in people’s hearts, not just sell.</p>

                    </div>
                </div>
                <div className="bgvsg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="532" viewBox="0 0 6 532" fill="none">
                    <path d="M2.66797 -4.07696e-05C1.19521 -4.07696e-05 0.001302 1.19387 0.001302 2.66663C0.001302 4.13939 1.19521 5.33329 2.66797 5.33329C4.14073 5.33329 5.33464 4.13939 5.33464 2.66663C5.33464 1.19387 4.14073 -4.07696e-05 2.66797 -4.07696e-05ZM2.66797 526C1.19521 526 0.001302 527.194 0.001302 528.667C0.001302 530.139 1.19521 531.333 2.66797 531.333C4.14073 531.333 5.33464 530.139 5.33464 528.667C5.33464 527.194 4.14073 526 2.66797 526ZM2.66797 2.66663H2.16797L2.16797 528.667H2.66797H3.16797L3.16797 2.66663H2.66797Z" fill="#5C5C5C"/>
                    </svg>
                </div>
            </div>
        </div>
    </>
  )
}

export default BrandSoul