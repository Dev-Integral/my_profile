import React from 'react';
import Home from './slide/Home';
import About from './slide/About';
import Skills from './slide/Skills';
import Projects from './slide/Projects';
import Contact from './slide/Contact';

const Slides = () => {
  
  return (

    <div className="slides">
      <div><Home /></div>
      <div><Projects /></div>
      <Skills />
      <About />
      <Contact />
    </div>
  )
};

export default Slides;