import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Info from './components/Info'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Info />
      <Footer />
    </>
  )
}

export default App