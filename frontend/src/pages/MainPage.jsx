import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Features from '../components/Features'
import Chip from '../components/Chip'
import Footer from '../components/Footer'
import Model from "../components/Model"

const MainPage = () => {
  return (
    <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlights />
        <Model />
        <Features />
        <Chip />
        <Footer />
    </main>
  )
}
    
export default MainPage