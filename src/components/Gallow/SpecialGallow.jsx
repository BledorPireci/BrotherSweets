import React from 'react';
import styles from './SpecialGallow.module.scss';
import specialChoco from '../../assets/gallow-choco.png';
import stars from '../../assets/stars.png';

const SpecialGallow = () => {
  return (
    <div className={styles.gallowContainer}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <div className={styles.textWrapper}>
            <img src={stars} alt="" className={styles.starsBackground} />
            <h1>The Cooler</h1>
            <h1>Gallow</h1>
            <h2>A Cosmic Twist on Sweetness</h2>
            <p>
            Embark on an interstellar adventure with every bite of our cosmic marshmallow, dipped in rich, velvety chocolate. Let the smooth, creamy texture transport you to a world beyond your wildest dreams, where the sweetness of the marshmallow and the decadence of the chocolate blend in perfect harmony.
            </p>
          </div>
        </div>
        <div className={styles.imageContent}>
          <img src={stars} alt="" className={styles.starsBackground} />
          <img 
            src={specialChoco} 
            alt="Chocolate Gallow product"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialGallow;
