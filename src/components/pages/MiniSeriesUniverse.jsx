import React from 'react'
import MiniSeriesUniverseFilter from '../miniseriesuniverse/MiniSeriesUniverseFilter'

import breadcrunb from '../../assets/img/reddit/mini.png'

const MiniSeriesUniverse = () => {
  return (
    <>
        <div className="breadcrumb miniseries">
                        <img src={breadcrunb} alt="" />
                        <div className="brudcont">
                            <h2>Real Audio. Real Minds</h2>
                        </div>
                    </div>
    
    <MiniSeriesUniverseFilter/>
    </>
  )
}

export default MiniSeriesUniverse