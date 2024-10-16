import "./App.css";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import User from "./components/User";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import ProtectedRoute from "./components/ProtectedRoute";
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
              <MainPage />
              <Footer />
            </>
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/user"
            element={
              <>
                <Navbar />
                <User />
                <Footer />
              </>
            }
          />
        </Route>

        <Route
          path="/SignIn"
          element={
            <>
              <SignInPage />
            </>
          }
        />
        <Route
          path="/SignUp"
          element={
            <>
              <SignUpPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
