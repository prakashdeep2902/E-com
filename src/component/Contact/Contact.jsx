import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-left">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you. Reach out for product support, orders,
            business inquiries, or general questions.
          </p>
        </div>

        <div className="contact-right">
          <img src="https://via.placeholder.com/520x340" alt="contact-banner" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        {/* Form */}
        <div className="contact-form-box">
          <h2>Send Message</h2>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea rows="6" placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Info */}
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Address</h4>
              <p>New Delhi, India</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>support@shopkart.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaClock />
            <div>
              <h4>Working Hours</h4>
              <p>Mon - Sat : 9:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="contact-footer">
        <p>© 2026 ShopKart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
