import React from 'react';
import Slider from 'react-slick';
import styles from './RegularGallow.module.scss';
import watermelon from '../../assets/gallow-watermelon.png';
import strawberry from '../../assets/gallow-strawberry.png';
import raspberry from '../../assets/gallow-raspberry.png';
import specialMini from '../../assets/gallow-mini.png';

// Import slick carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    pauseOnHover: false,
    arrows: false,
    customPaging: function(i) {
      return (
        <div className={styles.customDot}></div>
      );
    }
  };

  return (
    <div className={styles.gallowContainer}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div 
              className={styles.slide}
              style={{ 
                backgroundColor: slide.backgroundColor,
                backgroundImage: `linear-gradient(135deg, ${slide.backgroundColor} 0%, ${adjustColor(slide.backgroundColor, -10)} 100%)`
              }}
            >
              <div className={styles.content}>
                <div className={styles.textContent}>
                  <div className={styles.textWrapper}>
                    <h1 style={{ color: slide.titleColor }}>The</h1>
                    <h1 style={{ color: slide.titleColor }}>
                      {index === 3 ? 'Marble Gallow' : 'Gallow'}
                    </h1>
                    <h2 style={{ color: slide.titleColor }}>
                      {slide.subtitle}
                    </h2>
                    <p>
                      {slide.description}
                    </p>
                  </div>
                </div>
                <div className={styles.imageContent}>
                  <img 
                    src={slide.image} 
                    alt="Gallow product"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
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