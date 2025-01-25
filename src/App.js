// src/App.js
import React from "react";
import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BakeryImage from "./Images/bakery.jpeg";

const App = () => {
  return (
    <div>
      <Header />
      <img
        src={BakeryImage}
        alt="BakeryImage"
        className="h-screen w-screen"
      ></img>
      <main>
        <AboutUs />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
