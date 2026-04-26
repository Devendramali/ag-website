import React from 'react'
import Audiofiletr from '../audio/Audiofiletr'

import breadcrunb from '../../assets/img/reddit/audio.png'

const AudioPage = () => {
  return (
    <>
    <div className="breadcrumb">
                    <img src={breadcrunb} alt="" />
                    <div className="brudcont">
                        <h2>Real Audio. Real Minds</h2>
                    </div>
                </div>
        <Audiofiletr/>
    </>
  )
}

export default AudioPage