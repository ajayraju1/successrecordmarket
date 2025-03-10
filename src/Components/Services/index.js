import { motion } from "framer-motion";
import "./index.css";
import customerSupport from "../../assets/images/customer-support.jpg";
import systematicResearch from "../../assets/images/systematic-research.jpg";
import ontimeDelivery from "../../assets/images/ontime-delivery.jpg";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Customer Support",
      description:
        "SRM has proudly served clients seeking and giving utmost support with precision and excellence for over 12 years. For better results, we frequently talk with clients in person and speak with them.",
      image: customerSupport,
      direction: "right",
    },
    {
      id: 2,
      title: "Systematic Research",
      description:
        "A systematic research study could be a follow-up to previous work in the field. A process for identifying an issue and establishing a strategy for resolving it that is consistent.",
      image: systematicResearch,
      direction: "left",
    },
    {
      id: 3,
      title: "Ontime Delivery",
      description:
        "Meeting customer expectations and delivering high-quality work on time. We understand the importance of deadlines and ensure timely delivery of all projects.",
      image: ontimeDelivery,
      direction: "right",
    },
  ];

  return (
    <div className="services-container">
      <motion.h1
        className="services-main-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h1>

      <div className="services-list">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className={`service-item ${
              service.direction === "left" ? "reverse" : ""
            }`}
            initial={{ opacity: 0, x: service.direction === "left" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="service-image-container">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
            </div>

            <div className="service-content">
              <motion.h2
                className="service-title"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {service.title}
              </motion.h2>
              <motion.p
                className="service-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {service.description}
              </motion.p>
              <motion.button
                className="learn-more-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
