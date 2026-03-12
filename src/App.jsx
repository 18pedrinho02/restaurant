import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Menu from "./Components/Menu.jsx";
import Contact from "./Components/Contact.jsx";
// import Footer from "./Components/Footer.jsx";

const App = () => {

  return (
    <main>
      <Navbar/>
      <Hero/>
      <Menu/>
      <About/>
      <Contact/>
    </main>
  );
};

export default App;