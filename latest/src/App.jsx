import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0f1824]">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
