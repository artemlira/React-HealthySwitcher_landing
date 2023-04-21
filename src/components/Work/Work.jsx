import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from './work.module.scss';

const animatedLeft = {
  hidden: {
    x: '-100%',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.1 },
  },
};

const animatedRight = {
  hidden: {
    x: '100%',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.1 },
  },
};

function Work() {
  return (
    <section className={styles.work}>
      <div className="container">
        <div className={styles.container}>
          <h3 className={styles.title}>how it works</h3>
          <hr className={styles.line} />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 1.0, once: true }}
            className={styles.works}
          >
            <MBox
              custom={1}
              variants={animatedLeft}
              title="Pick meals"
              text="Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options."
            />
            <MBox
              custom={3}
              variants={animatedLeft}
              title="Choose how often"
              text="Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!"
            />
            <MBox
              custom={5}
              variants={animatedRight}
              title="fast deliveries"
              text="Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box."
            />
            <MBox
              custom={7}
              variants={animatedRight}
              title="tasty meals"
              text="Gobble makes cooking fast, so you have more time to unwind and be with family."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Box = forwardRef(({ title, text }, ref) => (
  <div className={styles.boxWork} ref={ref}>
    <h4 className={styles.workTitle}>{title}</h4>
    <hr className={styles.workLine} />
    <p className={styles.workText}>{text}</p>
  </div>
));

const MBox = motion(Box);

Box.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Work;
