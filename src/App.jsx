import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Header/NavBar'
import Home from './pages/Home/Home'
import About from './pages/About'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
    </>
  )
}

export default App
