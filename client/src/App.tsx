import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ReserveAKitten from "./pages/ReserveAKitten";
import OurCats from "./pages/OurCats";
import About from "./pages/AboutUs";
import LitterUpdates from "./pages/LitterUpdates";
import ContactUs from "./pages/ContactUs";
import BreedInfo from "./pages/BreedInfo";
import OwnersInfo from "./pages/OwnersInfo";
import AdminLogin from "./admin/pages/AdminLogin";
import AdminHomePage from "./admin/pages/AdminHomePage";
import AdminOurCats from "./admin/AdminOurCats";
import { AuthContextProvider } from "./admin/context/AuthContext";
import { AdminContextProvider } from "./admin/context/AdminContext";
import ProtectedRoute from "./admin/modules/ProtectedRoute";
import CheckCredentials from "./admin/modules/CheckCredentials";
import InsufficientPermission from "./admin/modules/InsufficientPermission";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <AdminContextProvider>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/reserveakitten" element={<ReserveAKitten />} />
            <Route path="/ourcats" element={<OurCats />} />
            <Route path="/litterupdates" element={<LitterUpdates />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/breedinfo" element={<BreedInfo />} />
            <Route path="/ownersinfo" element={<OwnersInfo />} />
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/checkCredentials" element={<CheckCredentials />} />
            <Route
              path="/insufficientPermission"
              element={<InsufficientPermission />}
            />
            <Route
              path="/adminHomePage"
              element={
                <ProtectedRoute>
                  <AdminHomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/adminOurCats"
              element={
                <ProtectedRoute>
                  <AdminOurCats />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AdminContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
