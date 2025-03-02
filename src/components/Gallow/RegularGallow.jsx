import React, { useState, useEffect, useRef } from 'react';
import styles from './RegularGallow.module.scss';
import watermelon from '../../assets/gallow-watermelon.png';
import strawberry from '../../assets/gallow-strawberry.png';
import raspberry from '../../assets/gallow-raspberry.png';
import specialMini from '../../assets/gallow-mini.png';

const slides = [
  {
    subtitle: "A Taste of the Cosmos in Every Bite",
    description: "Embark on an intergalactic adventure with every bite of our cosmic marshmallow. Soft, fluffy, and made to delight, this treat is sure to transport you to a world beyond your wildest dreams.",
    image: watermelon,
    backgroundColor: "#78D0F6",
    titleColor: "#F02B83"
  },
  {
    subtitle: "Sweetness to the Stars and Beyond",
    description: "Indulge in the heavenly delight of our marshmallow, crafted to lift your spirits and transport you to a realm of pure bliss. Soft, fluffy, and heavenly, this treat is the perfect companion for your journey to the stars.",
    image: strawberry,
    backgroundColor: "#FCD2DE",
    titleColor: "#EFBE41"
  },
  {
    subtitle: "The Marshmallow from Another Dimension",
    description: "Step into a realm where cosmic delight meets irresistible sweetness. Our marshmallow from another dimension is a culinary experience that will leave you questioning the boundaries of reality. Prepare to be transported to a world of pure wonder.",
    image: raspberry,
    backgroundColor: "#EB74DE",
    titleColor: "#F02B83"
  },
  {
    subtitle: "Sweetness to the Stars and Beyond",
    description: "Soft, fluffy, and heavenly – the perfect treat to lift your spirits. Now available in a smaller package, our marble gallow is the ideal indulgence for any occasion.",
    image: specialMini,
    backgroundColor: "#FCD2DE",
    titleColor: "#EFBE41"
  }
];

const RegularGallow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  // Handle next/prev slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };
  
  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;
    const distance = touchStartX.current - touchEndX.current;
    
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swipe left, go to next slide
        nextSlide();
      } else {
        // Swipe right, go to previous slide
        prevSlide();
      }
    }
  };

  return (
    <div className={styles.gallowContainer}>
      <div 
        className={styles.slide}
        style={{ 
          backgroundColor: slides[currentSlide].backgroundColor,
          backgroundImage: `linear-gradient(135deg, ${slides[currentSlide].backgroundColor} 0%, ${adjustColor(slides[currentSlide].backgroundColor, -10)} 100%)`
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.textWrapper}>
              <h1 style={{ color: slides[currentSlide].titleColor }}>The</h1>
              <h1 style={{ color: slides[currentSlide].titleColor }}>
                {currentSlide === 3 ? 'Marble Gallow' : 'Gallow'}
              </h1>
              <h2 style={{ color: slides[currentSlide].titleColor }}>
                {slides[currentSlide].subtitle}
              </h2>
              <p>
                {slides[currentSlide].description}
              </p>
            </div>
          </div>
          <div className={styles.imageContent}>
            <img 
              src={slides[currentSlide].image} 
              alt="Gallow product"
            />
          </div>
        </div>
      </div>
      
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button 
            key={index} 
            className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Helper function to darken/lighten colors for gradient
function adjustColor(color, amount) {
  return '#' + color.replace(/^#/, '').replace(/../g, color => 
    ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2)
  );
}

export default RegularGallow;