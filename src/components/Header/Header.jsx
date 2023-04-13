import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

function Header({ props }) {
  return (
    <section className={styles.header}>
      <div className="container">
        <div className={styles.container}>
          Header Component
          {props}
        </div>
      </div>
    </section>
  );
}

Header.propTypes = {
  props: PropTypes.string.isRequired,
};

export default Header;
