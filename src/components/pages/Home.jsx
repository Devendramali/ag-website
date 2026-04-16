import React from 'react'
import Banner from '../home/Banner'
import Scrolltext from '../home/Scrolltext'
import StackCards from '../home/StackCards'
import AGfream from '../home/AGfream'
import Gallery from '../home/Gallery'
import Contact from '../home/Contact'
import WorkSection from '../home/WorkSection'
import Series from '../home/Series'
import Connect from '../home/Connect'

const Home = () => {
  return (
    <>
        <Banner/>
     <Scrolltext/>
     <StackCards/>
      <AGfream/>
     <Gallery/>
     <WorkSection/>
     <Contact/>
     <Series/>
     <Connect/>
    </>

  )
}

export default Home