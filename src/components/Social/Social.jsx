import React from 'react';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { instagramGallery } from '../../DB';
// import PropTypes from 'prop-types';
import styles from './social.module.scss';

function Social() {
  return (
    <section className={styles.social}>
      <div className="container">
        <div className={styles.container}>
          <h3 className={styles.title}>We in Social</h3>
          <hr className="line" />
          <div className={styles.content}>
            <div className={styles.twitter}>
              <div className={styles.label}>
                <div className={styles.icon}>
                  <Twitter />
                </div>
                <p className={styles.name}>Twitter</p>
                <button
                  className={styles.btn}
                  type="button"
                >
                  follow us
                </button>
              </div>
              <div className={styles.body}>
                <p className={styles.data}>24 Jun at 16:20 pm</p>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet,
                  consectetur adipiscing
                </p>
                <p className={styles.author}>@DennisFerguson</p>
              </div>
            </div>
            <div className={styles.instagram}>
              <div className={styles.label}>
                <div className={styles.icon}>
                  <Instagram />
                </div>
                <p className={styles.name}>Instagram</p>
                <button
                  className={styles.btn}
                  type="button"
                >
                  follow us
                </button>
              </div>
              <div className={styles.instagramGallery}>
                {instagramGallery.map((item) => (
                  <div
                    className={styles.instagramIcon}
                    key={item.img}
                  >
                    <picture>
                      <source
                        srcSet={item.imgWebp}
                        type="image/webp"
                      />
                      <img
                        src={item.img}
                        alt="gallery instagram"
                      />
                    </picture>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.facebook}>
              <div className={styles.label}>
                <div className={styles.icon}>
                  <Facebook />
                </div>
                <p className={styles.name}>Facebook</p>
                <button
                  className={styles.btn}
                  type="button"
                >
                  follow us
                </button>
              </div>
              <div className={styles.body}>
                <p className={styles.data}>26 Jun at 16:20 pm</p>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet,
                  consectetur adipiscing Lorem ipsum dolor sit amet, consectetur
                  adipiscing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Social.propTypes = {
//   props: PropTypes.string.isRequired,
// };

export default Social;
