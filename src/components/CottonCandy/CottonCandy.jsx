import styles from './CottonCandy.module.scss';
import side1 from '../../assets/side1.png';
import side2 from '../../assets/side2.png';
import candy from '../../assets/ctc.png';
const CottonCandy = () => {
    return (
        <div id="cotton-candy-section" className={styles.container}>
            <div className={styles.content}>
                <div className={styles.polaroid}>
                    <img src={side1} alt="Cotton Candy" />
                </div>
                <div className={styles.text}>
                    <h1>Brother Sweets</h1>
                    <h2>Crafting Sweet Moments Since 2019</h2>
                    <p>Some love Gallow for its cosmic fluffiness, others crave the richness of Choco Gallow. Whether it's Honey Cake, Cotton Candy, or Marble Gallow, there's a perfect treat for everyone.</p>
                    <button>About Us</button>
                </div>
                <div className={styles.polaroid}>
                    <img src={side2} alt="Cotton Candy" />
                </div>
            </div>
            <div className={styles.candy}>
                <h2>Our flavored cotton candy</h2>
                <div className={styles.candyGrid}>
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className={styles.candyItem}>
                            <div className={styles.candyCircle}>
                                <img src={candy} alt="Cotton Candy Flavor" />
                            </div>
                            <p>Cotton Candy Taste</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CottonCandy;