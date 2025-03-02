import React, { useEffect } from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const scrollToFooter = (e) => {
    e.preventDefault();
    if (isHomePage) {
      const element = document.getElementById('footer-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#footer-section');
    }
  };

  const navigateToPage = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer id="footer-section" className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <img src={logo} alt="BS Logo" className={styles.logo} />
          <p className={styles.description}>
            Crafting moments of sweetness since 2019. We take pride in delivering 
            delightful treats that bring smiles to every occasion.
          </p>
        </div>

        <div className={styles.section}>
          <h3>Get in Touch</h3>
          <ul>
            <li className={styles.contactItem}>
              <a 
                href="https://maps.google.com/?q=1123 hahah location" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className={styles.icon}>📍</span>
                <span>1123 hahah location</span>
              </a>
            </li>
            <li className={styles.contactItem}>
              <a href="tel:+33344444555">
                <span className={styles.icon}>📞</span>
                <span>+33344444555</span>
              </a>
            </li>
            <li className={styles.contactItem}>
              <a href="mailto:info@brothersweets.com">
                <span className={styles.icon}>✉️</span>
                <span>brother@sweets.com</span>
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#" onClick={scrollToFooter}>Contact Us</a></li>
            <li><a href="/about" onClick={(e) => navigateToPage(e, '/about')}>About Us</a></li>
            <li><a href="/terms" onClick={(e) => navigateToPage(e, '/terms')}>Terms and Conditions</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Services</h3>
          <ul>
            <li><a href="/orders" onClick={(e) => navigateToPage(e, '/orders')}>Orders</a></li>
            <li><a href="/addresses" onClick={(e) => navigateToPage(e, '/addresses')}>Addresses</a></li>
            <li><a href="/account" onClick={(e) => navigateToPage(e, '/account')}>Account Details</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
