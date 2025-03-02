import React from 'react';
import styles from './AboutUs.module.scss';
import { FaHeart, FaLeaf, FaMagic, FaSmile, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import candyFactory from '../../assets/factory.jpg';
import team from '../../assets/team.webp';
import founder from '../../assets/fuat.png';

const AboutUs = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Our Sweet Journey</h1>
          <p>From humble beginnings to becoming your favorite sweet treats provider</p>
        </div>
      </div>

      <div className={styles.storySection}>
        <div className={styles.storyContent}>
          <div className={styles.textContent}>
            <h2>The Brother Sweets Story</h2>
            <p>
              Founded in 2019, Brother Sweets began with a simple mission: to create delicious, 
              high-quality confectioneries that bring joy to people of all ages. What started as 
              a small family business has grown into a beloved brand known for our signature 
              Marble Gallow, Cosmic Gallow, and other sweet innovations.
            </p>
            <p>
              Our recipes combine traditional candy-making techniques with modern flavors and 
              creative twists, resulting in treats that are both nostalgic and exciting.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img src={candyFactory} alt="Our candy factory" className={styles.storyImage} />
          </div>
        </div>
      </div>

      <div className={styles.valuesSection}>
        <h2>Our Sweet Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon} style={{"--i": 1}}>
              <FaLeaf />
            </div>
            <h3>Quality Ingredients</h3>
            <p>We use only the finest, natural ingredients to create our delicious treats.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon} style={{"--i": 2}}>
              <FaHeart />
            </div>
            <h3>Made with Love</h3>
            <p>Every sweet we create is made with passion and care, just like homemade.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon} style={{"--i": 3}}>
              <FaMagic />
            </div>
            <h3>Creative Innovation</h3>
            <p>We constantly explore new flavors and techniques to surprise and delight.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon} style={{"--i": 4}}>
              <FaSmile />
            </div>
            <h3>Customer Joy</h3>
            <p>Your happiness is our priority. We aim to bring smiles with every bite.</p>
          </div>
        </div>
      </div>

      <div className={styles.founderSection}>
        <div className={styles.founderContent}>
          <div className={styles.imageWrapper}>
            <img src={founder} alt="Our founder" className={styles.founderImage} />
          </div>
          <div className={styles.textContent}>
            <h2>Meet Our Founder</h2>
            <p>
              Brother Sweets was founded by candy enthusiast and culinary innovator, Fuat Miftari. 
              With a background in traditional confectionery and a passion for creating unique flavor 
              combinations, Fuat set out to create a candy brand that would stand out in the market.
            </p>
            <p>
              "I wanted to create treats that would bring back childhood memories while also offering 
              something new and exciting. The Marble Gallow was our first creation, and seeing how much 
              joy it brought to people inspired us to keep innovating and expanding our sweet offerings."
            </p>
            <p className={styles.quote}>— Fuat Miftari, Founder</p>
          </div>
        </div>
      </div>

      <div className={styles.teamSection}>
        <h2>Our Sweet Team</h2>
        <div className={styles.teamContent}>
          <div className={styles.textContent}>
            <p>
              Behind every delicious treat is our dedicated team of candy artisans, flavor experts, 
              and sweet enthusiasts. Our diverse team brings together different perspectives and skills, 
              united by a shared passion for creating the perfect sweet experience.
            </p>
            <p>
              From our candy kitchen to our packaging department, every team member plays a crucial role 
              in ensuring that the treats that reach your hands are of the highest quality and filled with 
              the Brother Sweets magic.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img src={team} alt="Our team" className={styles.teamImage} />
          </div>
        </div>
      </div>

      <div className={styles.contactSection}>
        <div className={styles.contactContent}>
          <h2>Come Say Hello!</h2>
          <p>We'd love to hear from you! Whether you have questions, feedback, or just want to share your Brother Sweets experience.</p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaEnvelope />
              </div>
              <p>info@brothersweets.com</p>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaPhone />
              </div>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaMapMarkerAlt />
              </div>
              <p>Sinan Pasha, Prizren</p>
            </div>
          </div>
          <button className={styles.contactButton}>Get in Touch</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
