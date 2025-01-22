import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Inline CSS in the JS file
const styles = {
  mainPage: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
  },
  paragraph: {
    fontSize: '1rem',
    color: '#555',
  },
  footerContainer: {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  footerColumn: {
    flex: '1',
    minWidth: '250px',
    margin: '10px',
  },
  footerHeading: {
    fontSize: '18px',
    marginBottom: '15px',
    color: '#333',
  },
  footerLinkList: {
    listStyle: 'none',
    padding: '0',
  },
  footerLinkItem: {
    marginBottom: '10px',
  },
  footerLink: {
    textDecoration: 'none',
    color: '#555',
  },
  footerLinkHover: {
    color: '#007BFF',
  },
  footerNewsletterInput: {
    padding: '10px',
    width: '70%',
    marginRight: '10px',
    border: '1px solid #ddd',
  },
  footerNewsletterButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  footerNewsletterButtonHover: {
    backgroundColor: '#0056b3',
  },
  footerBottom: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '14px',
    color: '#777',
  },
  subscribedMessage: {
    marginTop: '10px',
    color: 'green',
  },
};

const MainPage = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Handle newsletter subscription
  const subscribeNewsletter = () => {
    if (email) {
      setSubscribed(true);
      alert('Thank you for subscribing to our newsletter! We will keep you updated with new offers.');
      setEmail(''); // Clear the input field after subscription
    } else {
      alert('Please enter a valid email address!');
    }
  };

  
  
  return (
    <div style={styles.mainPage}>
      <h1 style={styles.heading}>Welcome to Our Rice Store</h1>
      <p style={styles.paragraph}>
        We offer a wide variety of premium rice sourced directly from Indian farms.
      </p>

      {/* Footer */}
      <footer style={styles.footerContainer}>
        <div style={styles.footerLinks}>
          {/* Quick Links */}
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>Quick Links</h3>
            <ul style={styles.footerLinkList}>
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
              <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>FAQ</a></li>
              <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>Privacy Policy</a></li>
              <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>Terms & Conditions</a></li>
              <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>Return & Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>Contact Information</h3>
            <ul style={styles.footerLinkList}>
              <li style={styles.footerLinkItem}><strong>Email:</strong> srisavadammalricemill@gmail.com </li>
              <li style={styles.footerLinkItem}><strong>Phone:</strong> +91-7598231354</li>
              <li style={styles.footerLinkItem}><strong>Address:</strong> Dindigul Hwy, Indira Nagar, Meenachinayakkanpatti, Dharmathupatti, Pallapatti, TamilNadu 624001
            , India</li>
            </ul>
          </div>

          {/* Social Media */}
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>Follow Us</h3>
            <ul style={styles.footerLinkList}>
              <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>Facebook</a></li>
              <li style={styles.footerLinkItem}><a target='_blank' href="https://wa.link/1sie4g" style={styles.footerLink}>Whatsapp</a></li>
              <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>Instagram</a></li>
              <li style={styles.footerLinkItem}><a href="#" style={styles.footerLink}>YouTube</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>Newsletter Signup</h3>
            <p>Stay updated with new arrivals, special offers, and more!</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={styles.footerNewsletterInput}
            />
            <button
            
              onClick={subscribeNewsletter}
              style={styles.footerNewsletterButton}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#007BFF')}
            >
              Subscribe
            </button>
            {subscribed && <p style={styles.subscribedMessage}>Thank you for subscribing!</p>}
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={styles.footerBottom}>
          <p>© 2025 Your Business Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
