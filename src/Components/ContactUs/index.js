import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./index.css";

const leadTypes = [
  "Motivated",
  "Distressed",
  "Probate",
  "Pre-Probates",
  "Foreclosure",
  "Pre-Foreclosure",
  "Inheritance",
  "Cash Buyers",
  "Investors",
  "Tax Delinquents",
  "Aged Homes",
  "Aged Owners",
  "FSBO",
  "Divorce",
  "Vacant Properties",
  "Absentee",
  "Code Violation",
];

const ContactUs = ({ formType }) => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    country: "",
    lead_type: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.user_name.trim()) {
      newErrors.user_name = "Name is required";
    }

    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = "Email is invalid";
    }

    if (formType === "freeSamples") {
      if (!formData.country.trim()) {
        newErrors.country = "Country is required";
      }
      if (!formData.lead_type) {
        newErrors.lead_type = "Lead type is required";
      }
    } else {
      // For buyNow form
      if (!formData.message.trim()) {
        newErrors.message = "Message is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus({ ...formStatus, submitting: true });

    // Different EmailJS configurations based on form type
    const emailConfig =
      formType === "freeSamples"
        ? {
            serviceId: "realLeadsId",
            templateId: "realLeadsSamp",
            publicKey: "tjSGet-caOcTVhpgy",
          }
        : {
            serviceId: "realLeadsId",
            templateId: "realLeadsBuy",
            publicKey: "tjSGet-caOcTVhpgy",
          };

    emailjs
      .sendForm(emailConfig.serviceId, emailConfig.templateId, form.current, {
        publicKey: emailConfig.publicKey,
      })
      .then(
        () => {
          setFormStatus({
            submitting: false,
            submitted: true,
            error: null,
          });
          form.current.reset();
        },
        (error) => {
          setFormStatus({
            submitting: false,
            submitted: false,
            error: "Failed to send message. Please try again.",
          });
          console.error("FAILED...", error.text);
        }
      );
  };

  if (formStatus.submitted) {
    return (
      <motion.div
        className="success-message"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <i className="fas fa-check-circle"></i>
        <h2>Thank You!</h2>
        <p>You will receive an email from us as soon as possible.</p>
      </motion.div>
    );
  }

  return (
    <div className="contact-container">
      <motion.div
        className="contact-form-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="contact-heading">
          {formType === "freeSamples" ? "Request Free Samples" : "Buy Now"}
        </h2>
        <p className="contact-subheading">
          {formType === "freeSamples"
            ? "Fill out the form below to receive your free samples"
            : "Please provide your details to proceed with the purchase"}
        </p>

        {formStatus.submitted && (
          <div className="alert alert-success">
            <i className="fas fa-check-circle"></i> Thank you for your message!
            We'll get back to you soon.
          </div>
        )}

        {formStatus.error && (
          <div className="alert alert-danger">
            <i className="fas fa-exclamation-circle"></i> {formStatus.error}
          </div>
        )}

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="user_name">Name *</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
            {errors.user_name && (
              <div className="error-message">{errors.user_name}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="user_email">Email *</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
            {errors.user_email && (
              <div className="error-message">{errors.user_email}</div>
            )}
          </div>

          {formType === "freeSamples" && (
            <>
              <div className="form-group">
                <label htmlFor="country">Country *</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  placeholder="Enter your country"
                />
                {errors.country && (
                  <div className="error-message">{errors.country}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="lead_type">Lead Type *</label>
                <div className="custom-select-container">
                  <select
                    id="lead_type"
                    name="lead_type"
                    value={formData.lead_type}
                    onChange={handleChange}
                    required
                    className="custom-select"
                  >
                    <option value="">Select Lead Type</option>
                    {leadTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <div className="select-arrow">
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </div>
                {errors.lead_type && (
                  <div className="error-message">{errors.lead_type}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific requirements or questions?"
                  rows="4"
                />
              </div>
            </>
          )}

          {formType !== "freeSamples" && (
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message"
                rows="4"
              />
              {errors.message && (
                <div className="error-message">{errors.message}</div>
              )}
            </div>
          )}

          <motion.button
            type="submit"
            className="submit-button"
            disabled={formStatus.submitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {formStatus.submitting ? "Sending..." : "Submit"}
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        className="contact-info-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3>Get in Touch</h3>

        <div className="contact-info-item">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <h4>Our Location</h4>
            <p>145 10th Ave, Miami, Florida 33172</p>
          </div>
        </div>

        {/* <div className="contact-info-item">
          <i className="fas fa-phone-alt"></i>
          <div>
            <h4>Phone Number</h4>
            <p>(123) 456-7890</p>
          </div>
        </div> */}

        <div className="contact-info-item">
          <i className="fas fa-envelope"></i>
          <div>
            <h4>Email Address</h4>
            <p>simonpikej@gmail.com</p>
          </div>
        </div>

        <div className="contact-info-item">
          <i className="fas fa-clock"></i>
          <div>
            <h4>Working Hours</h4>
            <p>Monday - Friday: 9am - 5pm</p>
            <p>Saturday: 10am - 2pm</p>
          </div>
        </div>

        <div className="social-links">
          <a
            href="https://www.facebook.com/profile.php?id=61559668961505"
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
            href="https://www.instagram.com/simonpikej/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
