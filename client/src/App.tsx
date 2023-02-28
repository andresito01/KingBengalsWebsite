import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from "react-router-dom"
import Home from './pages/Home';
import ReserveAKitten from './pages/ReserveAKitten';
import OurCats from './pages/OurCats';
import About from './pages/AboutUs';
import LitterUpdates from './pages/LitterUpdates';
import ContactUs from './pages/ContactUs';
import BreedInfo from './pages/BreedInfo';
import OwnerGuide from './pages/OwnerGuide';
import WebNavHeader from './components/WebNavHeader';

function App() {
  return (
    <div className="App">
      <WebNavHeader />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reserveakitten" element={<ReserveAKitten />} />
        <Route path="/ourcats" element={<OurCats />} />
        <Route path="/litterupdates" element={<LitterUpdates />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/breedinfo" element={<BreedInfo />} />
        <Route path="/breedinfo" element={<OwnerGuide />} />
      </Routes>
    </div>
  );
}

export default App;