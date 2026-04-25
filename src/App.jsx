import { useState } from 'react'
import '../src/assets/font/font.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Layout from './Layout'
import WorkWithMe from './components/pages/WorkWithMe'
import Aos from 'aos'
import AboutAG from './components/pages/AboutAG'

function App() {
   Aos.init();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/work-with-me' element={<WorkWithMe/>} />
            <Route path='/about-ag' element={<AboutAG/>} />
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
