import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

function Footer({ props }) {
  return (
    <section className={styles.footer}>
      <div className="container">
        <div className={styles.container}>
          Footer Component
          {props}
        </div>
      </div>
    </section>
  );
}

Footer.propTypes = {
  props: PropTypes.string.isRequired,
};

export default Footer;
