// import logo from "./logo.svg";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cancel from "./pages/Cancel";
import Store from "./pages/Store";
import Success from "./pages/Success";
import CartProvider from "./CartContext";
// localhost:3000 -> Home
// localhost:3000/success -> Success

function ReserveKittenStore() {
  return (
    <CartProvider>
      <Container style={{ background: "white" }}>
        <NavbarComponent></NavbarComponent>
        <Routes>
          <Route index element={<Store />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Routes>
      </Container>
    </CartProvider>
  );
}

export default ReserveKittenStore;
