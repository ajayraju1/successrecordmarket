import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Us Section */}
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>About Us</h3>
          <p>
            We specialize in providing comprehensive real estate solutions with
            expert research and data analysis to help our clients make informed
            decisions.
          </p>
          <img
            src="https://via.placeholder.com/150x50"
            alt="Trust Rating"
            className="trust-rating"
          />
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/research">Research</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
            <li>
              <Link to="#">Terms of Service</Link>
            </li>
          </ul>
        </motion.div>

        {/* Resources Section */}
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Resources</h3>
          <ul>
            <li>
              <Link to="#">Market Reports</Link>
            </li>
            <li>
              <Link to="#">Property Guides</Link>
            </li>
            <li>
              <Link to="#">Investment Tips</Link>
            </li>
            <li>
              <Link to="#">Real Estate News</Link>
            </li>
            <li>
              <Link to="#">Free Downloads</Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3>Contact Us</h3>
          <div className="contact-info">
            <p>
              <i className="fas fa-phone"></i>
              <span>+1 (555) 123-4567</span>
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              <span>info@example.com</span>
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              <span>
                123 Real Estate Ave, Suite 100
                <br />
                Business City, ST 12345
              </span>
            </p>
          </div>
          <div className="social-links">
            <a
              href="https://facebook.com/successrecordmarket"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com/successrecordmarket"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com/company/successrecordmarket"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://instagram.com/successrecordmarket"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://youtube.com/successrecordmarket"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p>
          &copy; {new Date().getFullYear()} Success Record Market. All rights
          reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
