import { useState } from 'react'
import '../src/assets/font/font.css'
import Header from './components/Header'
import Banner from './components/home/Banner'
import Scrolltext from './components/home/Scrolltext'
import StackCards from './components/home/StackCards'
import Contact from './components/home/Contact'
import AGfream from './components/home/AGfream'
import Connect from './components/home/Connect'
import Footer from './components/Footer'
import Series from './components/home/Series'
import Gallery from './components/home/Gallery'
import WorkSection from './components/home/WorkSection'

function App() {

  return (
    <>
     <Header/>
     <Banner/>
     <Scrolltext/>
     <StackCards/>
     <AGfream/>
     <Gallery/>
     <WorkSection/>
     <Contact/>
     <Series/>
     <Connect/>
     <Footer/>
    </>
  )
}

export default App
