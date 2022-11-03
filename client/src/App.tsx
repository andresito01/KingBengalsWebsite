import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from "react-router-dom"
import Home from './pages/Home';
import ReserveAKitten from './pages/ReserveAKitten';
import OurCats from './pages/OurCats';
import About from './pages/AboutUs';
import Reviews from './pages/Reviews';
import LitterUpdates from './pages/LitterUpdates';
import ContactUs from './pages/ContactUs';
import BreedInfo from './pages/BreedInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reserveakitten" element={<ReserveAKitten />} />
        <Route path="/ourcats" element={<OurCats />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/litterupdates" element={<LitterUpdates />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/breedinfo" element={<BreedInfo />} />
      </Routes>
    </div>
  );
}

export default App;