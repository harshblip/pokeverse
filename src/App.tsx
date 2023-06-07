import React from "react";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import Wrapper from "./sections/Wrapper";
import Background from "./components/Background";
import './scss/index.scss';

export default function App() {
  return (
    <div className="main-container">
      <Background />
      <div className="app">
        <Navbar />
        <Wrapper />
        <Footer />
      </div>
    </div>
  );
}
