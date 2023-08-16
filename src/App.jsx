import React from "react";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import SellProduct from "./pages/SellProduct";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/sell" element={<SellProduct />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
