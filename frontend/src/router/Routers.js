import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import NotFound from "../pages/NotFound";
import ThankYou from "../pages/ThankYou";

import { AuthContext } from "../context/AuthContext";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
const Routers = () => {
  const { user } = useContext(AuthContext);
  const role = user?.role;
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="/about" element={<About />} />

      {role && <Route path="/dashboard" element={<Dashboard />} />}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
