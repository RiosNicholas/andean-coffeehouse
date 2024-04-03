import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Location from './components/Location'
import ContactForm from './components/ContactForm'

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
      <ContactForm />
    </>
  )
}

export default App
