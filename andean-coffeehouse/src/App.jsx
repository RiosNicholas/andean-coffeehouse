import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Location 
        city='Elizabeth' 
        state='New Jersey'
        address='123 ABC Street'
        phoneNumber='911'
      />
      <Footer />
    </>
  )
}

export default App
