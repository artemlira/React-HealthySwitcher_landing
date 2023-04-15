import React from 'react';
import PropTypes from 'prop-types';
import styles from './work.module.scss';

function Work() {
  return (
    <section className={styles.work}>
      <div className="container">
        <div className={styles.container}>
          <h3 className={styles.title}>how it works</h3>
          <hr className={styles.line} />
          <div className={styles.works}>
            <Box
              title="Pick meals"
              text="Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options."
            />
            <Box
              title="Choose how often"
              text="Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!"
            />
            <Box
              title="fast deliveries"
              text="Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box."
            />
            <Box
              title="tasty meals"
              text="Gobble makes cooking fast, so you have more time to unwind and be with family."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Box({ title, text }) {
  return (
    <div className={styles.boxWork}>
      <h4 className={styles.workTitle}>{title}</h4>
      <hr className={styles.workLine} />
      <p className={styles.workText}>{text}</p>
    </div>
  );
}

Box.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Work;
