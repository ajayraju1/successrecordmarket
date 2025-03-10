import React from "react";
import { motion } from "framer-motion";
import "./index.css";

// Adding images for each research category
const researchLists = [
  {
    heading: "Real Estate Lists",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
    lists: [
      "We save your time and money",
      "All the research we do is from public and court record sources with a great domain knowledge",
      "Extensive database of property records across the nation",
      "Regular updates ensure you get the latest information",
    ],
  },
  {
    heading: "Data Collection & Excel Processing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
    lists: [
      "We provide the data in Microsoft Excel with required customization",
      "It makes your work easier and more efficient",
      "Clean, organized data ready for your analysis",
      "Custom formats tailored to your specific needs",
    ],
  },
  {
    heading: "LEAD GENERATION",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    lists: [
      "53+ Real Estate lists for targeted marketing",
      "We generate quality leads that are recently updated",
      "Less investment, more leads that potentially convert to deals",
      "Effective lead generation can expand your market presence and reach to deals with your marketing",
    ],
  },
  {
    heading: "Property Analysis",
    image:
      "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
    lists: [
      "Comprehensive market analysis to guide your investment decisions",
      "Property condition assessments to avoid surprises",
      "Financial analysis including cash flow projections and ROI calculations",
      "Revenue analysis, corporate evaluations, and purchase price recommendations",
    ],
  },
];

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const Research = () => {
  return (
    <div className="research-container">
      <motion.h1
        className="research-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h1>

      <motion.p
        className="research-subheading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        We provide comprehensive real estate data services to help you make
        informed decisions
      </motion.p>

      <motion.div
        className="research-lists-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {researchLists.map((item, index) => (
          <motion.div
            className="research-item"
            key={item.heading}
            variants={itemVariants}
          >
            <div className="research-item-content">
              <div className="research-text">
                <h2 className="research-item-heading">{item.heading}</h2>
                <ul className="research-list">
                  {item.lists.map((listItem, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {listItem}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  className="learn-more-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
              <div className="research-image-container">
                <img
                  src={item.image}
                  alt={item.heading}
                  className="research-image"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Research;
