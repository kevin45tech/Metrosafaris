import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Packages from "./components/Packages";
import SouthSudan from "./components/SouthSudan";
import Testimonial from "./components/Testimonial";
import WhatWeDo from "./components/WhatWeDo";
import WhyUs from "./components/WhyUs";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <WhatWeDo />
                            <Packages />
                            <Testimonial />
                            <WhyUs />
                        </>
                    }
                />
                <Route path="/about" element={<About />} />
                <Route path="/southsudan" element={<SouthSudan />} />

                <Route path="/gallery" element={<Gallery />} />

                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
