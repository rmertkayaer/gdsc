import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Duyurular from "./components/Duyurular";
import Ekip from "./components/Ekip";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Duyurular/>
      <Ekip/>
      <Footer/>
    </div>
  );
}

export default App;
