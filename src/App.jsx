import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function App() {
  const location = useLocation();
  const isPolicyPage = location.pathname.startsWith("/policy");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hide Navbar on policy pages */}
      {!isPolicyPage && <Navbar />}

      <main className="flex-grow">
        <Routes>
          {/* Main single-page layout */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Services />
                <About />
                <Contact />
              </>
            }
          />
          {/* Terms & Conditions */}
          <Route
            path="/policy/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          {/* Privacy Policy */}
          <Route
            path="/policy/privacy-policy"
            element={<PrivacyPolicy />}
          />
        </Routes>
      </main>

      {/* Hide Footer on policy pages */}
      {!isPolicyPage && <Footer />}
    </div>
  );
}
