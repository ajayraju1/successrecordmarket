import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Research from "./Components/Research";
import Products from "./Components/Products";
import AboutUs from "./Components/AboutUs";
import "./App.css";

const App = () => {
  const location = useLocation();

  return (
    <div className="app-container">
      <div className="responsive-container">
        <Header />
        <div className="app-body">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/research" element={<Research />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/aboutus" element={<AboutUs />} />
            </Routes>
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
