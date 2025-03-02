import styles from './Popcorn.module.scss';
import popcorn from '../../assets/popcorn.png';
const Popcorn = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>Pop, Crunch, Enjoy!</h1>
                <h3>Snack Time Just Got Better!</h3>
            </div>
            <div className={styles.popcorn}>
                <div className={styles.popcornGrid}>
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className={styles.popcornItem}>
                            <div className={styles.popcornCircle}>
                                <img src={popcorn} alt="Pizza Popcorn" />
                            </div>
                            <p>Pizza popcorn</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Popcorn;
