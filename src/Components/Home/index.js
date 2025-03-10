import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import keyboardpressing from "../../assets/images/keyboardpressing.jpg";
import leadGenerationWithPeople from "../../assets/images/leadGenerationWithPeople.jpg";
import leadGenerationWithBlubHeads from "../../assets/images/leadGenerationWithBlubHeads.jpg";
import smallHouseWithKeys from "../../assets/images/smallHouseWithKeys.jpg";
import turnIdeasIntoReality from "../../assets/images/turnIdeasIntoReality.jpg";
import getMoreLeads from "../../assets/images/getMoreLeads.jpg";
import leadGenerationWithThreePeople from "../../assets/images/leadGenerationWithThreePeople.jpg";
import keysInHand from "../../assets/images/keysInHand.jpg";
import leadGenerationWithKeyPoints from "../../assets/images/leadGenerationWithKeyPoints.jpg";

const Home = () => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={keyboardpressing}
            className="hero-image"
            alt="keyboardpressing"
          />
        </motion.div>

        <motion.h1
          className="home-heading"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Best platform to record your Success with our real estate records
        </motion.h1>
      </div>

      <motion.div
        className="home-va-heading-con"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="va-heading">Real Estate Lists and Service</h1>
        <h1 className="va-heading">
          We Strive to meet the needs of our clients in a Professional manner in
          order to provide real estate help.
        </h1>
      </motion.div>

      <motion.button
        className="va-btn"
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Virtual Assistant
      </motion.button>

      <div className="image-grid">
        <div data-aos="fade-up" className="image-container">
          <img
            src={leadGenerationWithPeople}
            className="home-body-img"
            alt="Lead Generation With People"
          />
          <div className="image-overlay">
            <h3>Lead Generation Experts</h3>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="image-container"
        >
          <img
            src={smallHouseWithKeys}
            className="home-body-img"
            alt="Small House With Keys"
          />
          <div className="image-overlay">
            <h3>Property Access Solutions</h3>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="image-container"
        >
          <img
            src={leadGenerationWithBlubHeads}
            className="home-body-img"
            alt="Lead Generation With Ideas"
          />
          <div className="image-overlay">
            <h3>Innovative Thinking</h3>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="image-container"
        >
          <img
            src={turnIdeasIntoReality}
            className="home-body-img"
            alt="Turn Ideas Into Reality"
          />
          <div className="image-overlay">
            <h3>From Concept to Reality</h3>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="image-container"
        >
          <img
            src={leadGenerationWithThreePeople}
            className="home-body-img"
            alt="Lead Generation With Three People"
          />
          <div className="image-overlay">
            <h3>Collaborative Solutions</h3>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="image-container"
        >
          <img
            src={getMoreLeads}
            className="home-body-img"
            alt="Get More Leads"
          />
          <div className="image-overlay">
            <h3>Lead Growth Strategies</h3>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="image-container"
        >
          <img src={keysInHand} className="home-body-img" alt="Keys In Hand" />
          <div className="image-overlay">
            <h3>Ready-to-Move Solutions</h3>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="image-container"
        >
          <img
            src={leadGenerationWithKeyPoints}
            className="home-body-img"
            alt="Lead Generation With Key Points"
          />
          <div className="image-overlay">
            <h3>Strategic Development</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
