import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./index.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Real Estate Investor",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "The team's expertise in real estate data analysis has been invaluable for my investment decisions. Their responsive and professional approach makes them stand out.",
  },
  {
    name: "Michael Chen",
    role: "Property Developer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "Outstanding service! Their market insights and detailed research have helped us identify prime opportunities in competitive markets.",
  },
  {
    name: "Emma Davis",
    role: "Real Estate Agent",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "I've been consistently impressed with their thorough analysis and quick turnaround times. A truly reliable partner for real estate professionals.",
  },
  {
    name: "Robert Wilson",
    role: "Property Manager",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    text: "Their comprehensive reports and attention to detail have made property evaluation so much easier. Highly recommended for any real estate professional.",
  },
];

const AboutUs = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="about-container">
      <div className="about-img-txt-container">
        <img
          src="https://www.mcdonaldjoneshomes.com.au/sites/default/files/styles/blog_hero_banner/public/first_time_investor_heres_what_you_need_to_know.jpg"
          alt="About Us"
          className="about-img"
        />

        <div className="about-txt-container">
          <h1 className="about-heading">About Success Record Market</h1>
          <p className="about-description">
            We provide research and back office support services to realtors,
            investors, and wholesalers. These include lead generation, skip
            tracing, cold calling and admin tasks, which can be performed
            remotely.
          </p>

          <p className="about-description">
            We are happy to announce that we had completed our 10th anniversary
            in December 2019, started with 9 team members in the year 2009 and
            currently with 100+ team members. Expanding our wings globally to
            other nations like UK, Germany, Dubai etc.
          </p>
          <p className="">
            We are one among the leading real estate data company in the nation
            with over 10+ years of experience in the real estate market,
            providing motivated seller leads to real estate professionals from
            around 2000+ counties. We strive to meet the needs of our clients in
            a professional manner, with a goal of providing daily/weekly updated
            real estate data for the real estate industry and others
            professionals in USA, Canada, and Australia
          </p>
          <p className="">
            Everyday our team of experts research thousands of records
            throughout the nation to generate the best possible matches. We test
            our data to insure quality and accuracy for our clients. At{" "}
            <a href="https://success-record-market.netlify.app">
              SuccessRecordMarket.com
            </a>{" "}
            we provide services to some of the most successful real estate
            professionals, investors, lenders.
          </p>
          <p className="">
            We save your time and money. All research we perform is public
            information through online resources. We make it easy for you,
            providing you with a great competitive advantage by using our data.
            All you have to do is simply implement your marketing campaign.
          </p>
          <p className="">
            We are also providing other services like REVA, data of mortgage,
            insurance industries etc, social media marketing, data mining, data
            conversion, RPA(Robotic Automation Process) etc. with great
            acceptance rate.
          </p>
          <p className=""></p>
        </div>
      </div>

      <hr />

      <div className="about-clients-container">
        <h1 className="about-clients-heading">About Our Clients</h1>
        <p className="about-clients-desc">
          We combine industry knowledge, technical skills, and an innovative
          culture to help our clients unlock value and succeed.
        </p>

        <div className="testimonials-container">
          <div
            className="testimonials-wrapper"
            style={{
              transform: `translateX(-${currentTestimonial * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-content">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                  <div className="testimonial-text">
                    <p className="testimonial-quote">{testimonial.text}</p>
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${
                  index === currentTestimonial ? "active" : ""
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="about-social-links"></div>
    </div>
  );
};

export default AboutUs;
