import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/Header/NavBar";
import Home from "./pages/Home/Home";
// import About from './pages/About'
import Name from "./pages/Home/Name";
import ProjectGrid from "./components/Projects/Projects";

// TODO use red white and black for light mode -- default red of find better
// TODO when link from nav bar scales smoothly chang it to icon and add name under it (name optional)
function App() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      image: "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces",
      description:
        "This is the description for Project 1. It showcases some amazing features and technologies.",
    },
    {
      id: 2,
      title: "Project 2",
      image: "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces",
      description:
        "This is the description for Project 2. It highlights innovative solutions and creative designs.  lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae praesentium doloremque, ad iusto vero nostrum. Aliquam modi aperiam amet nam necessitatibus quis adipisci neque maiores quam reprehenderit incidunt odio nisi quia eaque, voluptatibus magni deleniti ipsam commodi! Sed id similique accusamus soluta. Voluptates quos quasi reiciendis recusandae obcaecati corrupti temporibus.",
    },
    
  ];

  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      {/* <About/> */}
      {/* <Name /> */}

      <div className="App">
        <h1>My Projects</h1>
        <ProjectGrid projects={projects} />
      </div>
    </>
  );
}

export default App;
