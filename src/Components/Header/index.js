import "./index.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../Modal";
import ContactUs from "../ContactUs";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFreeSamplesModal, setShowFreeSamplesModal] = useState(false);
  const [showBuyNowModal, setShowBuyNowModal] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark header-container">
      <div className="logo-title-mail-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="navbar-brand m-0 text-center"
        >
          <h5 className="title">SUCCESS RECORD MARKET</h5>
          <p className="title-mail">simonpikesj@gmail.com</p>
        </motion.div>

        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </motion.div>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`navbar-collapse ${isOpen ? "show" : ""}`}>
        <motion.div
          className="nav-links-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            className="nav-link"
            to="/research"
            onClick={() => setIsOpen(false)}
          >
            Research
          </Link>
          <Link
            className="nav-link"
            to="/products"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            className="nav-link"
            to="/aboutus"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
        </motion.div>

        <motion.div
          className="button-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary custom-btn free-samples-btn"
            onClick={() => setShowFreeSamplesModal(true)}
          >
            FREE SAMPLES
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-success custom-btn buy-now-btn ml-2 mt-md-0 mt-2"
            onClick={() => setShowBuyNowModal(true)}
          >
            BUY NOW
          </motion.button>
        </motion.div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={showFreeSamplesModal}
        onClose={() => setShowFreeSamplesModal(false)}
      >
        <ContactUs formType="freeSamples" />
      </Modal>

      <Modal isOpen={showBuyNowModal} onClose={() => setShowBuyNowModal(false)}>
        <ContactUs formType="buyNow" />
      </Modal>
    </nav>
  );
};

export default Header;
