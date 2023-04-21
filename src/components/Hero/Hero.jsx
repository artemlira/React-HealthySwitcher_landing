import React from 'react';
import Contacts from '../Contacts';
import styles from './hero.module.scss';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.container}>
          <h1 className={styles.title}>
            <span>Your </span>
            favourite food
            <span> delivered </span>
            hot & fresh
          </h1>
          <p className={styles.text}>
            <span>HEALTHY SWITCHER</span>
            chefs do all the prep work, like peeling, chopping & marinating, so you can cook a fresh
            homemade dinner in just 15 minutes.
          </p>
          <button className={styles.btn} type="button">
            <a href="#dishes">Order Now</a>
          </button>
          <Contacts />
        </div>
      </div>
    </section>
  );
}

export default Hero;
