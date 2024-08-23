import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.js";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import "./Styleguide.css";

import Home from "./pages/Home/Home.js";
import Vision from "./pages/Vision/Vision.js";
import Team from "./pages/Team/Team.js";
import Sponsors from "./pages/Sponsors/Sponsors.js";
import Learning from "./pages/Learning/Learning.js";
import Sustainability from "./pages/Sustainability/Sustainability.js";

const App = () => (
  <div className="App">
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/vision" exact Component={Vision} />
        <Route path="/team" exact Component={Team} />
        <Route path="/sponsors" exact Component={Sponsors} />
        <Route path="/learning" exact Component={Learning} />
        <Route path="/sustainability" exact Component={Sustainability} />
      </Routes>
      <Footer />
    </Router>
  </div>
);

export default App;
