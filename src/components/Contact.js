import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize EmailJS (replace with your public key)
  useEffect(() => {
    emailjs.init('PFdtPXYXxvLmoVSQ9'); // You'll need to get this from EmailJS
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const emailData = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      // Send to first email
      await emailjs.send('service_k0d401g', 'template_ymtf56c', {
        ...emailData,
        to_email: 'imenjlassi619@gmail.com'
      });

      // Send to second email
      await emailjs.send('service_k0d401g', 'template_ymtf56c', {
        ...emailData,
        to_email: 'Imen.Jlassi@outlook.fr'
      });

      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out if you'd like to discuss ideas or collaborate!
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:Imen.Jlassi@outlook.fr">Imen.Jlassi@outlook.fr</a>
                  <br />
                  <a href="mailto:imenjlassi619@gmail.com">imenjlassi619@gmail.com</a>
                </div>
              </div>

              <div className="contact-method">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+21629553654">+216 29 553 654</a>
                </div>
              </div>

              <div className="contact-method">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Ras Jebel, Bizerte, Tunisia</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <a href="https://github.com/ImenJlassi7" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/imen-jlassi7" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                ✓ Thank you for contacting me!
              </div>
            )}

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
