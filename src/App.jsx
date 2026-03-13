import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Menu from "./Components/Menu.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import PrivacyPolicy from "./Components/PrivacyPolicy.jsx";
import CookieBanner from "./Components/CookieBanner.jsx";

const App = () => {
  return (
    <BrowserRouter>
    <CookieBanner/>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar/>
            <Hero/>
            <Menu/>
            <About/>
            <Contact/>
            <Footer/>
          </>
        }/>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;