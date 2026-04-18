import "./About.css";
import { FaCheckCircle, FaUsers, FaTruck, FaShieldAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-left">
          <h1>About ShopKart</h1>
          <p>
            We provide quality products with affordable prices and fast
            delivery. Our mission is to make online shopping simple, secure and
            enjoyable for everyone.
          </p>
        </div>

        <div className="about-right">
          <img src="https://via.placeholder.com/520x350" alt="about-banner" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Choose Us</h2>

        <div className="why-grid">
          <div className="why-card">
            <FaTruck />
            <h3>Fast Delivery</h3>
            <p>Quick and reliable shipping across all locations.</p>
          </div>

          <div className="why-card">
            <FaShieldAlt />
            <h3>Secure Payment</h3>
            <p>Trusted payment methods for safe transactions.</p>
          </div>

          <div className="why-card">
            <FaUsers />
            <h3>Happy Customers</h3>
            <p>Thousands of satisfied customers trust our service.</p>
          </div>

          <div className="why-card">
            <FaCheckCircle />
            <h3>Best Quality</h3>
            <p>Carefully selected premium products for daily life.</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="our-story">
        <h2>Our Story</h2>

        <p>
          ShopKart started with a simple idea — to bring stylish and useful
          products to customers at the best prices. Today we continue growing by
          focusing on trust, innovation and customer satisfaction.
        </p>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <p>© 2026 ShopKart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
