import React from "react";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      </main>
    </>
  );
};

export default App;
