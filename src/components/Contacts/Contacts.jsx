import React from 'react';
import clock from '../../assets/icons/watch.png';
import call from '../../assets/icons/call.png';
import nearMe from '../../assets/icons/near_me.png';
import styles from './contacts.module.scss';

function Contacts() {
  return (
    <section className={styles.contacts}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.time}>
            <div className={styles.icon}>
              <img
                src={clock}
                alt="clock"
              />
            </div>
            <h4 className={styles.title}>Today 10:00 am - 7:00 pm</h4>
            <p className={styles.text}>Working hours</p>
          </div>
          <div className={styles.address}>
            <div className={styles.icon}>
              <img
                src={nearMe}
                alt="message"
              />
            </div>
            <h4 className={styles.title}>Velyka Vasylkivska 100</h4>
            <p className={styles.text}>Get Directions</p>
          </div>
          <div className={styles.phone}>
            <div className={styles.icon}>
              <img
                src={call}
                alt="call"
              />
            </div>
            <h4 className={styles.title}>+38 (063)833 24 15</h4>
            <p className={styles.text}>Call Online</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
