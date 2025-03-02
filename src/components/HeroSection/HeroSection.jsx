import styles from './HeroSection.module.scss';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero.png';

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h1>Sweet Dreams Are Made of These</h1>
                    <p>
                        Indulge in our handcrafted cotton candy, honey cakes, and fluffy 
                        marshmallows. Made with love, served with joy.
                    </p>
                    <div className={styles.buttons}>
                        <Link to="/shop" className={styles.shopNow}>Shop Now</Link>
                        <Link to="/story" className={styles.ourStory}>Our Story</Link>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={`${styles.blob} ${styles.pink}`}></div>
                    <div className={`${styles.blob} ${styles.lightPink1}`}></div>
                    <div className={`${styles.blob} ${styles.lightPink2}`}></div>
                    <div className={`${styles.blob} ${styles.lightPink3}`}></div>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageWrapper}>
                            <img src={heroImage} alt="Child enjoying sweets" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
