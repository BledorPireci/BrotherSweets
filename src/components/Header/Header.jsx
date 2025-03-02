import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'unset' : 'hidden';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check for hash in URL when component mounts or location changes
  useEffect(() => {
    if (isHomePage && location.hash) {
      const id = location.hash.substring(1); // Remove the # character
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure DOM is ready
      }
    }
  }, [location, isHomePage]);

  // Scroll to top when navigating to a new page without hash
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
    
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const navigateToPage = (path) => {
    navigate(path);
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <div className={styles.leftLinks}>
          <Link to="/" onClick={(e) => {
            e.preventDefault();
            navigateToPage('/');
          }}>Honey Home 🏠</Link>
          <Link to="#" onClick={(e) => {
            e.preventDefault();
            scrollToSection('cotton-candy-section');
          }}>Sweet Treats 🍬</Link>
        </div>
        
        <div className={styles.logo}>
          <Link to="/" onClick={(e) => {
            e.preventDefault();
            navigateToPage('/');
          }}>
            <img src={logo} alt="BS Logo" />
          </Link>
        </div>

        <div className={styles.rightLinks}>
          <Link to="#" onClick={(e) => {
            e.preventDefault();
            scrollToSection('footer-section');
          }}>Find Us 📍</Link>
          <Link to="/about" onClick={(e) => {
            e.preventDefault();
            navigateToPage('/about');
          }}>Our Story 🔍</Link>
        </div>

        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
          <div className={styles.mobileLinks}>
            <Link to="/" onClick={(e) => {
              e.preventDefault();
              navigateToPage('/');
            }}>Honey Home 🏠</Link>
            <Link to="#" onClick={(e) => {
              e.preventDefault();
              scrollToSection('cotton-candy-section');
            }}>Sweet Treats 🍬</Link>
            <Link to="#" onClick={(e) => {
              e.preventDefault();
              scrollToSection('footer-section');
            }}>Find Us 📍</Link>
            <Link to="/about" onClick={(e) => {
              e.preventDefault();
              navigateToPage('/about');
            }}>About Us 🔍</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
