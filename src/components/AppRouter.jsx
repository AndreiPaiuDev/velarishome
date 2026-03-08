import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Philosophy from "./Philosophy/Philosophy";
import Portfolio from "./Portfolio/Portfolio";
import Trends from "./Trends/Trends";
import Newsletter from "./Newsletter/Newsletter";
import Footer from "./Footer/Footer";
import CookieBanner from "./CookieBanner/CookieBanner";
import ServicesPage from "../pages/Services/ServicesPage";
import TrendsPage from "../pages/Trends/TrendsPage";
import ContactPage from "../pages/Contact/ContactPage";
import PortfolioPage from "../pages/Portfolio/PortfolioPage";

const AppRouter = () => (
  <Router>
    <Header />
    <main style={{ paddingTop: '72px' }}>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Philosophy />
            <Portfolio />
            <Trends />
            <Newsletter />
          </>
        } />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/trends" element={<TrendsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </main>
    <Footer />
    <CookieBanner />
  </Router>
);

export default AppRouter;
