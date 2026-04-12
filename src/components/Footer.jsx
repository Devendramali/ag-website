import React from 'react'
import footerlogo from "../assets/img/footer.png"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <div className='upperfooter'>
                <p>Maybe it’s time we build something together.</p>
                <div className="row">
                    <div className="col-lg-3">
                        <ul>
                            <li><a href="#!">about</a></li>
                            <li><a href="#!">work</a></li>
                            <li><a href="#!">services</a></li>
                            <li><a href="#!">contact</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-5">
                        <ul>
                            <li><a href="#!">diigiihost</a></li>
                            <li><a href="#!">quote your price</a></li>
                            <li><a href="#!">best rate websites</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <ul>
                            <li><a href="#!">instagram</a></li>
                            <li><a href="#!">facebook</a></li>
                            <li><a href="#!">youtube</a></li>
                            <li><a href="#!">linkedin</a></li>
                            <li><a href="#!">X</a></li>
                        </ul>
                    </div>
                    

                </div>
            </div>
            <div className="lowe">
                <figure>
                    <img src={footerlogo} alt="" />
                </figure>
                <p>Copyright © 2026 ALKESH. All Rights Reserved. Powered By : <a href="https://www.digihost.in/">DIIGIIHOST</a></p>
            </div>

        </div>
    </footer>
  )
}

export default Footer