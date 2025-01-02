import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/navbar'
import Home from './pages/home/home'
import About from './pages/about/about'
import Skill from './pages/skill/skill'
import Projects from './pages/projects/projects'

function App() {
  
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Projects/>
        
    </>
  )
}

export default App
