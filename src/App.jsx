import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CityWeather from "./pages/CityWeather";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/city/:cityName" element={<CityWeather />} />
      </Routes>
    </Router>
  );
}

export default App;
