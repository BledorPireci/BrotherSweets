import React, { useState, useEffect } from 'react';
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
    className: styles.slide1
  },
  {
    subtitle: "Sweetness to the Stars and Beyond",
    description: "Indulge in the heavenly delight of our marshmallow, crafted to lift your spirits and transport you to a realm of pure bliss. Soft, fluffy, and heavenly, this treat is the perfect companion for your journey to the stars.",
    image: strawberry,
    className: styles.slide2
  },
  {
    subtitle: "The Marshmallow from Another Dimension",
    description: "Step into a realm where cosmic delight meets irresistible sweetness. Our marshmallow from another dimension is a culinary experience that will leave you questioning the boundaries of reality. Prepare to be transported to a world of pure wonder.",
    image: raspberry,
    className: styles.slide3
  },
  {
    subtitle: "Sweetness to the Stars and Beyond",
    description: "Soft, fluffy, and heavenly – the perfect treat to lift your spirits. Now available in a smaller package, our marble gallow is the ideal indulgence for any occasion.",
    image: specialMini,
    className: styles.slide4
  }

];

const RegularGallow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      // Start exit animation
      setIsAnimating(true);
      
      setTimeout(() => {
        // Change slide
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setIsAnimating(false);
        // Start enter animation
        setIsEntering(true);
        
        // Remove enter animation class after animation completes
        setTimeout(() => {
          setIsEntering(false);
        }, 500);
      }, 500); // Match this with exit animation duration
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`${styles.gallowContainer} ${slides[currentSlide].className}`}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <div className={styles.textWrapper}>
            <h1 className={isAnimating ? styles.exitText : ''}>The</h1>
            <h1 className={isAnimating ? styles.exitText : ''}>
              {currentSlide === 3 ? 'Marble Gallow' : 'Gallow'}
            </h1>
            <h2 className={isAnimating ? styles.exitText : ''}>
              {slides[currentSlide].subtitle}
            </h2>
            <p className={isAnimating ? styles.exitText : ''}>
              {slides[currentSlide].description}
            </p>
          </div>
        </div>
        <div className={styles.imageContent}>
          <img 
            src={slides[currentSlide].image} 
            alt="Gallow product"
            className={isAnimating ? styles.exitImage : isEntering ? styles.enterImage : ''}
          />
        </div>
      </div>
    </div>
  );
};

export default RegularGallow;