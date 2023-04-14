import React from 'react';
import Contacts from '../Contacts/Contacts';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.container}>
          <Contacts />
          <hr className={styles.line} />
          <div className={styles.logo}>
            <Logo />
          </div>
          <p className={styles.text}>
            © Designed by Yellow Snow. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
