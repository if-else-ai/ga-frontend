import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Reproduce from "./contents/Reproduce";
import About from "./contents/About";
import Home from "./contents/Home";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Reproduce">
          <Reproduce />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
