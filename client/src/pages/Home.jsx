import React from "react";
import Navbar from "../components/NavBar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import "../App.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Section
        title="E-Commerce"
        description="Order Online for Touchless Delivery"
        backgroundImg="Landing.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Slider />
      <Footer />
    </div>
  );
}

export default Home;
