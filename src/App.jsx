import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/navbar'
import Home from './pages/home/home'
import About from './pages/about/about'

function App() {
  
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
        
    </>
  )
}

export default App
