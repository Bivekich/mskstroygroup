import "./App.css";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "toastr/build/toastr.min.css";

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
