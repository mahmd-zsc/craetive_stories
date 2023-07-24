import React from "react";
import Header from "./components/header";
import Landing from "./components/landing";
import About from "./components/about";
import Features from "./components/features";
import Studio from "./components/studio";
import Food from "./components/food";
import Portfolio from "./components/protfolio";
import Work from "./components/work";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App  ">
      <Header />
      <Landing />
      <About />
      <Features />
      <Studio />
      <Food />
      <Portfolio />
      <Work />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
