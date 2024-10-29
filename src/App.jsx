import "./App.css";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import CommercialRealEstate from "./components/CommercialRealEstate";
import Partners from "./components/Partners";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import TeamSection from "./components/Team";
import ContactUsMain from "./components/ContactUsMain";
import OurProjects from "./components/OurProjects";
import WhyTrustUs from "./components/WhyTrustUs";
import OurPrices from "./components/OurPrices";
import Services from "./components/Services";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "toastr/build/toastr.min.css";
import { useState } from "react";
import ContactPopup from "./components/ContactPopup";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <CommercialRealEstate togglePopup={togglePopup} />
              {isPopupOpen && <ContactPopup togglePopup={togglePopup} />}
              <WhyTrustUs />
              <Partners />
              <TeamSection />
              <Reviews />
              <ContactUsMain />
              <Footer />
            </>
          }
        />
        <Route
          path="/Projects"
          element={
            <>
              <Navbar />
              <OurProjects />
              <Footer />
            </>
          }
        />
        <Route
          path="/Contacts"
          element={
            <>
              <Navbar />
              <ContactForm />
              <Footer />
            </>
          }
        />
        <Route
          path="/Prices"
          element={
            <>
              <Navbar />
              <OurPrices />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/News"
          element={
            <>
              <Navbar />
              <News />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
