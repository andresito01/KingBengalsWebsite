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
import AdminParents from "./admin/pages/AdminParents";
import AdminLitters from "./admin/pages/AdminLitters";
import AdminKittens from "./admin/pages/AdminKittens";
import AdminTestimonial from "./admin/pages/AdminTestimonial";
import { AuthContextProvider } from "./admin/context/AuthContext";
import { AdminContextProvider } from "./admin/context/AdminContext";
import { ParentsContextProvider } from "./admin/context/ParentsContext";
import { LittersContextProvider } from "./admin/context/LittersContext";
import { KittensContextProvider } from "./admin/context/KittensContext";
import { TestimonyContextProvider } from "./admin/context/TestimonyContext";
import ProtectedRoute from "./admin/modules/ProtectedRoute";
import CheckCredentials from "./admin/modules/CheckCredentials";
import InsufficientPermission from "./admin/modules/InsufficientPermission";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <AdminContextProvider>
          <ParentsContextProvider>
            <LittersContextProvider>
              <KittensContextProvider>
                <TestimonyContextProvider>
                  <Routes>
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route
                      path="/reserveakitten"
                      element={<ReserveAKitten />}
                    />
                    <Route path="/ourcats" element={<OurCats />} />
                    <Route path="/litterupdates" element={<LitterUpdates />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/breedinfo" element={<BreedInfo />} />
                    <Route path="/ownersinfo" element={<OwnersInfo />} />
                    <Route path="/login" element={<AdminLogin />} />
                    <Route
                      path="/checkCredentials"
                      element={<CheckCredentials />}
                    />
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
                      path="/adminParents"
                      element={
                        <ProtectedRoute>
                          <AdminParents />
                        </ProtectedRoute>
                      }
                    />

                    <Route
                      path="/adminLitters"
                      element={
                        <ProtectedRoute>
                          <AdminLitters />
                        </ProtectedRoute>
                      }
                    />

                    <Route
                      path="/adminKittens"
                      element={
                        <ProtectedRoute>
                          <AdminKittens />
                        </ProtectedRoute>
                      }
                    />

                    <Route
                      path="/adminTestimonial"
                      element={
                        <ProtectedRoute>
                          <AdminTestimonial />
                        </ProtectedRoute>
                      }
                    />
                  </Routes>
                </TestimonyContextProvider>
              </KittensContextProvider>
            </LittersContextProvider>
          </ParentsContextProvider>
        </AdminContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
