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
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "toastr/build/toastr.min.css";
import OurProjects from "./components/OurProjects";
import WhyTrustUs from "./components/WhyTrustUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Navbar />
              <CommercialRealEstate />
              <OurProjects />
              <WhyTrustUs />
              <Partners />
              <TeamSection />
              <Reviews/>
              <ContactUsMain />
              <ContactForm />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
