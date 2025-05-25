import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Feauters";
import Programs from "./pages/Programs";
import Community from "./pages/Community";
import Budget from "./pages/Budget"

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
          <Route path="/feauters" element={<Features />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/community" element={<Community />} />
          <Route path="/budget" element={<Budget />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
