import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MainHero from './components/MainHero'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
     <div className='bg-black p-4 lg:px-6 text-white'>
    <Navbar />    
    <Hero />
    <MainHero />
    <Footer />
    </div> 
    </>
  )
}

export default App
