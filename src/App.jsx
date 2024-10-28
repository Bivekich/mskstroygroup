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
import { useRef } from "react";

function App() {
  // Refs for each section
  const commercialRealEstateRef = useRef(null);
  const ourProjectsRef = useRef(null);
  const whyTrustUsRef = useRef(null);
  const partnersRef = useRef(null);
  const teamSectionRef = useRef(null);
  const reviewsRef = useRef(null);
  const contactUsMainRef = useRef(null);

  // Function to handle smooth scrolling to a section
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Pass the handleScroll function and refs to Navbar */}
              <Navbar
                onScroll={handleScroll}
                sections={{
                  commercialRealEstateRef,
                  ourProjectsRef,
                  whyTrustUsRef,
                  partnersRef,
                  teamSectionRef,
                  reviewsRef,
                  contactUsMainRef,
                }}
              />
              <div ref={commercialRealEstateRef}>
                <CommercialRealEstate />
              </div>
              <div ref={ourProjectsRef}>
                <OurProjects />
              </div>
              <div ref={whyTrustUsRef}>
                <WhyTrustUs />
              </div>
              <div ref={partnersRef}>
                <Partners />
              </div>
              <div ref={teamSectionRef}>
                <TeamSection />
              </div>
              <div ref={reviewsRef}>
                <Reviews />
              </div>
              <div ref={contactUsMainRef}>
                <ContactUsMain />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/Contacts"
          element={
            <>
              <Navbar
                onScroll={handleScroll}
                sections={{
                  commercialRealEstateRef,
                  ourProjectsRef,
                  whyTrustUsRef,
                  partnersRef,
                  teamSectionRef,
                  reviewsRef,
                  contactUsMainRef,
                }}
              />
              <ContactForm />
              <Footer />
            </>
          }
        />
        <Route
          path="/Prices"
          element={
            <>
              <Navbar
                onScroll={handleScroll}
                sections={{
                  commercialRealEstateRef,
                  ourProjectsRef,
                  whyTrustUsRef,
                  partnersRef,
                  teamSectionRef,
                  reviewsRef,
                  contactUsMainRef,
                }}
              />
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
              <Navbar
                onScroll={handleScroll}
                sections={{
                  commercialRealEstateRef,
                  ourProjectsRef,
                  whyTrustUsRef,
                  partnersRef,
                  teamSectionRef,
                  reviewsRef,
                  contactUsMainRef,
                }}
              />
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
