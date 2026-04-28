import React from 'react'
import MiniSeriesUniverseFilter from '../miniseriesuniverse/MiniSeriesUniverseFilter'

import breadcrunb from '../../assets/img/reddit/vsidom.png'
import FounderWisdomVaultFilter from '../founderwisdomvault/FounderWisdomVaultFilter'
const FounderWisdomVault = () => {
  return (
    <>
        <div className="breadcrumb  p-0">
                            <img src={breadcrunb} alt="" />
                            <div className="brudcont">
                                <h2>Founder Wisdom Vault</h2>
                            </div>
                        </div>
                        <FounderWisdomVaultFilter/>
    
    </>
  )
}

export default FounderWisdomVault