import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function App() {
  const location = useLocation();
  const isPolicyPage = location.pathname.startsWith("/policy");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hide Navbar on policy pages */}
      {!isPolicyPage && <Navbar />}

      <div className="flex-grow">
        <Routes>
          {/* Main single-page layout */}
          <Route path="/" element={<Landing />} />
          {/* Terms & Conditions */}
          <Route
            path="/policy/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          {/* Privacy Policy */}
          <Route path="/policy/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>

      {/* Hide Footer on policy pages */}
      {!isPolicyPage && <Footer />}
    </div>
  );
}
