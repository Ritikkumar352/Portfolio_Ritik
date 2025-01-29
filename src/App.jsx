import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Header/NavBar'
import Home from './pages/Home/Home'
// import About from './pages/About'
import Name from './pages/Home/Name'


// TODO use red white and black for light mode -- default red of find better
// TODO when link from nav bar scales smoothly chang it to icon and add name under it (name optional)
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      {/* <About/> */}
      <Name/>
    </>
  )
}

export default App
