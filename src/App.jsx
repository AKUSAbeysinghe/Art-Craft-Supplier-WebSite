import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/Pages/Privacy";
import TermsOfService from "./components/Pages/Terms.jsx";
import FAQ from "./components/Pages/FAQ.jsx";
import Contact from "./components/Pages/Contact.jsx";


import Pigments from "./components/Pages/Pigments.jsx";
import PigmentationPage from "./components/Pages/Colours.jsx";
import BrushesPage from "./components/Pages/Brushes.jsx";
import Paperspage from "./components/Pages/Papers.jsx";
import Pens from "./components/Pages/Pens.jsx";
import ArchivePage from "./components/Pages/Archive.jsx";


// Admin Pages
import Login from "./Admin/Login.jsx";
import SignUp from "./Admin/SignUp.jsx";
import AdminPanel from "./Admin/AdminPanel.jsx";

// ScrollToTop
import ScrollToTop from "./components/ScrollToTop.jsx";

// Smart Layout
function Layout({ children }) {
  const location = useLocation();

  const hideLayout = ["/login", "/signup", "/admin", "/admin-lookbook"].includes(
    location.pathname
  );

  return (
    <div className="bg-[#fcf8f3] text-black font-sans min-h-screen flex flex-col">
      
      {/* ScrollToTop */}
      <ScrollToTop />

      {/* Navbar */}
      {!hideLayout && (
        <div className="flex-shrink-0">
          <Navbar />
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer */}
      {!hideLayout && (
        <div className="flex-shrink-0">
          <Footer />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Customer Pages */}
        <Route path="/" element={<Layout><Home /></Layout>} />





         <Route
          path="/colors"
          element={
            <Layout>
              <PigmentationPage />
            </Layout>
          }
        />

        <Route
          path="/Pigments"
          element={
            <Layout>
              <Pigments />
            </Layout>
          }
        />
  
     
      


        <Route
          path="/Brushes"
          element={
            <Layout>
              <BrushesPage />
            </Layout>
          }
        />

        <Route
          path="/papers"
          element={
            <Layout>
              <Paperspage />
            </Layout>
          }
        />



        <Route
          path="/pens"
          element={
            <Layout>
              <Pens />
            </Layout>
          }
        />

        <Route
          path="/archieve"
          element={
            <Layout>
              <ArchivePage />
            </Layout>
          }
        />

        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />

        <Route
          path="/terms-of-service"
          element={
            <Layout>
              <TermsOfService />
            </Layout>
          }
        />

        <Route
          path="/FAQ"
          element={
            <Layout>
              <FAQ />
            </Layout>
          }
        />

        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />

        {/* Admin Pages */}
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />

        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

        <Route
          path="/admin"
          element={
            <Layout>
              <AdminPanel />
            </Layout>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <Layout>
              <div className="text-center py-12 font-sans">
                404: Page Not Found
              </div>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;