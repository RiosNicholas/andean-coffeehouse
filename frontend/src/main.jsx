import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import About from './pages/About.jsx'
import Menu from './pages/Menu.jsx'
import Locations from './pages/Locations.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index={true} path="/" element={<App />} />
      <Route index={true} path="/about" element={<About />} />
      <Route index={true} path="/menu" element={<Menu />} />
      <Route index={true} path="/blog" element={<Locations />} />
      <Route index={true} path="/locations" element={<Blog />} />
      <Route index={true} path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
)
