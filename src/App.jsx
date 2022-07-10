import React from "react";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Tech from "./sections/Tech";

export default function App() {
  const [navOpen, setNavOpen] = React.useState(false);
  console.log(navOpen);

  return (
    <main
      id="home"
      className="master-grid grid text-slate-600 bg-slate-100 relative"
    >
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      {navOpen === true ? <MobileNavigation /> : <></>}
      <Home />
      <Tech />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
