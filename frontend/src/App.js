
import React from "react";

import Header from "./components/layouts/Header/Header";
import Main from "./components/layouts/Main/Main";
import Footer from "./components/layouts/Footer/Footer";

import { BrowserRouter as Router } from "react-router-dom";

import './styles/css/index.css';

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
