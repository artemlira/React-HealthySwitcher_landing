import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { chefs } from '../../DB';
import styles from './chefs.module.scss';

const animatedDown = {
  hidden: {
    y: '100%',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

function Chefs() {
  const { chef1, chef2, chef3 } = chefs;
  return (
    <section className={styles.chefs}>
      <div className="container">
        <div className={styles.container}>
          <h3 className={styles.title}>This month&apos;s chefs</h3>
          <hr className="line" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1, once: false }}
            className={styles.content}
          >
            <MChef
              variants={animatedDown}
              avatar={chef1.avatar}
              avatarWebp={chef1.avatarWebp}
              name="Gregory Flores"
              specialty="Chef of the cold"
              imgBig={chef1.imgBig}
              imgBigWebp={chef1.imgBigWebp}
              img1={chef1.img1}
              img1Webp={chef1.img1Webp}
              img2={chef1.img2}
              img2Webp={chef1.img2Webp}
            />
            <MChef
              variants={animatedDown}
              avatar={chef2.avatar}
              avatarWebp={chef2.avatarWebp}
              name="Gregory Flores"
              specialty="Chef of the cold"
              imgBig={chef2.imgBig}
              imgBigWebp={chef2.imgBigWebp}
              img1={chef2.img1}
              img1Webp={chef2.img1Webp}
              img2={chef2.img2}
              img2Webp={chef2.img2Webp}
            />
            <MChef
              variants={animatedDown}
              avatar={chef3.avatar}
              avatarWebp={chef3.avatarWebp}
              name="Gregory Flores"
              specialty="Chef of the cold"
              imgBig={chef3.imgBig}
              imgBigWebp={chef3.imgBigWebp}
              img1={chef3.img1}
              img1Webp={chef3.img1Webp}
              img2={chef1.img2}
              img2Webp={chef3.img2Webp}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Chef = forwardRef(
  (
    {
      avatar,
      avatarWebp,
      name,
      specialty,
      imgBig,
      imgBigWebp,
      img1,
      img1Webp,
      img2,
      img2Webp,
    },
    ref,
  ) => (
    <div
      className={styles.chef}
      ref={ref}
    >
      <div className={styles.chefAbout}>
        <div className={styles.avatar}>
          <picture>
            <source
              srcSet={avatarWebp}
              type="image/webp"
            />
            <img
              src={avatar}
              alt="avatar"
            />
          </picture>
        </div>
        <div className={styles.name}>
          <h4>{name}</h4>
          <p className={styles.specialty}>{specialty}</p>
        </div>
      </div>
      <div className={styles.images}>
        <div className={styles.bigImg}>
          <picture>
            <source
              srcSet={imgBigWebp}
              type="image/webp"
            />
            <img
              src={imgBig}
              alt="dish"
            />
          </picture>
        </div>
        <div className={styles.img1}>
          <picture>
            <source
              srcSet={img1Webp}
              type="image/webp"
            />
            <img
              src={img1}
              alt="dish"
            />
          </picture>
        </div>
        <div className={styles.img2}>
          <picture>
            <source
              srcSet={img2Webp}
              type="image/webp"
            />
            <img
              src={img2}
              alt="dish"
            />
          </picture>
        </div>
      </div>
    </div>
  ),
);

const MChef = motion(Chef);

Chef.propTypes = {
  avatar: PropTypes.string.isRequired,
  avatarWebp: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  specialty: PropTypes.string.isRequired,
  imgBig: PropTypes.string.isRequired,
  imgBigWebp: PropTypes.string.isRequired,
  img1: PropTypes.string.isRequired,
  img1Webp: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  img2Webp: PropTypes.string.isRequired,
};

export default Chefs;
