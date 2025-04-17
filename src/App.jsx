import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/navbar'
import Home from './pages/home/home'
import Skill from './component/skill/skill'
import About from './component/about/about'
import Projects from './component/projects/projects'
import ContactForm from './component/contact/contact'
import Footer from './component/footer/footer'




function App() {
  
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App

