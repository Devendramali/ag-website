import { useState } from 'react'
import '../src/assets/font/font.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Layout from './Layout'
import WorkWithMe from './components/pages/WorkWithMe'
import Aos from 'aos'
import AboutAG from './components/pages/AboutAG'
import RedditPage from './components/pages/RedditPage'
import AudioPage from './components/pages/AudioPage'
import ArticlePage from './components/pages/ArticlePage'
import MiniSeriesUniverse from './components/pages/MiniSeriesUniverse'

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
            <Route path='/reddit-list' element={<RedditPage/>} />
            <Route path='/audio-list' element={<AudioPage/>} />
            <Route path='/article-list' element={<ArticlePage/>} />
            <Route path='/mini-series-universe' element={<MiniSeriesUniverse/>} />
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
