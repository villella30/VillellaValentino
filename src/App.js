// App.js
import './App.css';
import React, { useEffect } from 'react';
import particlesConfig from './animations/particlesConfig';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Me from './components/Me';

function App() {

  useEffect(() => {
    window.particlesJS('particles-js', particlesConfig);
  }, []);

  return (
    <div className="App">
      
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Me />

    </div>
  );
}

export default App;
