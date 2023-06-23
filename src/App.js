import Navbar from './components/navbar/Navbar';
import Skills from './components/Skills_section/Skills';
import About from './components/first_section_about/About';
import Projects from './components/projects_section/Projects';
import AboutSec from './components/about_section/About';
import Contact from './components/contact_section/Contact';
import Footer from './components/footer/Footer';
import React, {Component} from 'react';
import { useState,useEffect,useRef  } from "react";


import ScaleLoader from "react-spinners/ScaleLoader";
import './App.css';

import {FacebookIcon} from "react-share";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


 function App (){
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="bg-[#282C33] ]  ">
      
     <div>
      {
       loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <ScaleLoader color="#CD1818" loading={loading} size={100} height={100} width={20} />
            </div>
        ) : (
          <>
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <AboutSec />
            <Contact />
            <Footer />
          </>
        )}
     </div>
      
    </div>
  );
}

export default App;

