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
import OwnersInfo from './pages/OwnersInfo';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reserveakitten" element={<ReserveAKitten />} />
        <Route path="/ourcats" element={<OurCats />} />
        <Route path="/litterupdates" element={<LitterUpdates />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/breedinfo" element={<BreedInfo />} />
<<<<<<< HEAD
        <Route path="/ownersinfo" element={<OwnerGuide />} />
=======
        <Route path="/ownersinfo" element={<OwnersInfo />} />
>>>>>>> 9b966bf39b7dbcd84487a7a8cabbc244ca0a7b2d
      </Routes>
    </div>
  );
}

export default App;