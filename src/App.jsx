import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/Header/NavBar";
import Home from "./pages/Home/Home";
import Name from "./pages/Home/Name";
import ProjectGrid from "./components/Projects/Projects";
import ProjectPage from "./components/Projects/ProjectPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";

// TODO use red white and black for light mode -- default red of find better
// TODO when link from nav bar scales smoothly chang it to icon and add name under it (name optional)
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
      {/* <NavBar></NavBar> */}
      <Home></Home>
      {/* <About/> */}
      {/* <Name /> */}

      {/* <div className="App">
        <h1>My Projects</h1>
        <ProjectGrid projects={projects} />
      </div> */}

      <ProjectPage />
    </>
  );
}

export default App;
