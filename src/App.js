import React from "react";
import { Brand, CTA, Navbar } from "./components";
import { Blog, Footer, Header, Possibility, WhatGPT3 } from "./container";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />

      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
