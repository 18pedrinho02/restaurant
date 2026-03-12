import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Menu from "./Components/Menu.jsx";
// import Reservation from "./Components/Reservation.jsx";
// import Footer from "./Components/Footer.jsx";

const App = () => {

  return (
    <main>
      <Navbar/>
      <Hero/>
      <Menu/>
      <About/>
    </main>
  );
};

export default App;