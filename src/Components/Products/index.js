import React from "react";
import { motion } from "framer-motion";
import "./index.css";

const productsList = [
  {
    productImg:
      "https://w7.pngwing.com/pngs/331/232/png-transparent-house-real-estate-home-dollar-sign-finance-house-service-logo-united-states-dollar.png",
    productName: "Pre-Foreclosure",
    productDescription:
      "Get ahead of the market with properties in the pre-foreclosure phase. These leads present unique opportunities for investors and buyers looking for potential deals.",
    features: [
      "Updated weekly to ensure timeliness",
      "Includes contact details of property owners",
      "Detailed property information",
      "Filtered for high conversion potential",
    ],
  },
  {
    productImg:
      "https://cdn.iconscout.com/icon/premium/png-512-thumb/real-estate-law-2443167-2035553.png",
    productName: "Pre-Probate",
    productDescription:
      "Access our exclusive pre-probate listings before they enter the traditional market. These property leads can offer significant value to informed investors.",
    features: [
      "Early access to potential probate properties",
      "Comprehensive owner information",
      "Property details and estimated values",
      "Situation analysis for better approach",
    ],
  },
  {
    productImg:
      "https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/homeowner-icon.png",
    productName: "Distressed Homes & Owners",
    productDescription:
      "Connect with property owners facing challenges. Our carefully researched distressed property lists help you provide solutions while finding valuable opportunities.",
    features: [
      "Properties with maintenance issues",
      "Owners facing financial difficulties",
      "Detailed distress indicators",
      "Contact information and best approach methods",
    ],
  },
  {
    productImg: "https://static.thenounproject.com/png/2255610-200.png",
    productName: "Inheritance",
    productDescription:
      "Target properties that have recently changed ownership through inheritance. These leads often represent motivated sellers looking for hassle-free transactions.",
    features: [
      "Recently inherited properties",
      "New owner contact information",
      "Property details and condition estimates",
      "Inheritance date and relevant details",
    ],
  },
  {
    productImg:
      "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/investor-icon.png",
    productName: "Investors",
    productDescription:
      "Connect with active real estate investors looking for their next opportunity. Our investor lists are carefully vetted to ensure you're reaching serious buyers.",
    features: [
      "Active investors with purchase history",
      "Investment preferences and criteria",
      "Available capital information where possible",
      "Direct contact details for efficient communication",
    ],
  },
  {
    productImg:
      "https://i.pinimg.com/736x/65/e3/1f/65e31f6f4a9b196c011ba39bf226496e.jpg",
    productName: "Attorneys",
    productDescription:
      "Build valuable relationships with attorneys specializing in real estate, probate, and related fields. These connections can be invaluable for deal flow and expertise.",
    features: [
      "Attorneys specializing in real estate law",
      "Probate and estate planning specialists",
      "Practice information and specialties",
      "Direct contact information for networking",
    ],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
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

const Products = () => (
  <div className="products-container">
    <motion.h1
      className="products-heading"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Products
    </motion.h1>

    <motion.p
      className="products-subheading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Our specialized lists provide you with targeted, high-quality leads to
      maximize your investment potential
    </motion.p>

    <motion.div
      className="products-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {productsList.map((product, index) => (
        <motion.div
          className="product-card"
          key={product.productName}
          variants={itemVariants}
        >
          <div className="product-icon-container">
            <img
              src={product.productImg}
              alt={product.productName}
              className="product-icon"
            />
          </div>
          <h2 className="product-name">{product.productName}</h2>
          <p className="product-description">{product.productDescription}</p>

          <div className="product-features">
            <h3>Key Features:</h3>
            <ul>
              {product.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.button
            className="product-action-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Sample
          </motion.button>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default Products;
