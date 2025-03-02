import React from 'react';
import styles from './HoneyCake.module.scss';
import honeyCakeImg from '../../assets/honey-cake.png';

const HoneyCake = () => {
  return (
    <div className={styles.gallowContainer}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <div className={styles.textWrapper}>
            <h1>BUZZ-worthy</h1>
            <h1>Bites!</h1>
            <h2>Indulge in Pure Bliss</h2>
            <p>
              Discover the perfect harmony of honey-sweetened cake enrobed in smooth chocolate. Each bite delivers a golden moment of pure joy.
            </p>
          </div>
        </div>
        <div className={styles.imageContent}>
          <img 
            src={honeyCakeImg} 
            alt="Honey Cake product"
          />
        </div>
      </div>
    </div>
  );
};

export default HoneyCake;
