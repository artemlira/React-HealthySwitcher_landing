import React from 'react';
import { ReactComponent as Eye } from '../../assets/icons/eye.svg';
import { ReactComponent as Answer } from '../../assets/icons/answer.svg';
import bigCard from '../../assets/images/recipes/01.jpg';
import bigCardWebp from '../../assets/images/recipes/01.webp';
import card2Img from '../../assets/images/recipes/02r.jpg';
import card2ImgWebp from '../../assets/images/recipes/02r.webp';
import styles from './recipes.module.scss';

function Recipes() {
  return (
    <section className={styles.recipes}>
      <div className="container">
        <div className={styles.container}>
          <h3 className={styles.title}>Recipes From Our Chefs</h3>
          <hr className="line" />
          <div className={styles.body}>
            <div className={styles.bigCard}>
              <button
                className={styles.bigCardBtn}
                type="button"
              >
                breakfast
              </button>
              <p className={styles.bigCardData}>05 Jul 2016</p>
              <p className={styles.bigCardText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className={styles.bigCardName}>Jason Keller</p>
              <div className={styles.bigCardViews}>
                <div className={styles.bigCardView}>
                  <Eye />
                  <span>275</span>
                </div>
                <div className={styles.bigCardQuestions}>
                  <Answer />
                  <span>12</span>
                </div>
              </div>
              <div className={styles.bigCardImage}>
                <picture>
                  <source
                    srcSet={bigCardWebp}
                    type="image/webp"
                  />
                  <img
                    src={bigCard}
                    alt="grilled meat"
                  />
                </picture>
              </div>
            </div>
            <div className={styles.smallCards}>
              <div className={`${styles.smallCard} ${styles.card1}`}>
                <div className={styles.content}>
                  <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                  </p>
                </div>
                <div className={styles.icons}>
                  <div className={styles.buttons}>
                    <button
                      className={styles.btn}
                      type="button"
                    >
                      lunch
                    </button>
                    <p className={styles.data}>07 Jan 2016</p>
                  </div>
                  <div className={styles.views}>
                    <div className={styles.view}>
                      <Eye />
                      <span>275</span>
                    </div>
                    <div className={styles.questions}>
                      <Answer />
                      <span>12</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.smallCard} ${styles.card2}`}>
                <div className={styles.card2Img}>
                  <picture>
                    <source
                      srcSet={card2ImgWebp}
                      type="image/webp"
                    />
                    <img
                      src={card2Img}
                      alt="crouton salad"
                    />
                  </picture>
                </div>
                <div className={styles.content}>
                  <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                  </p>
                </div>
                <div className={styles.icons}>
                  <div className={styles.buttons}>
                    <button
                      className={styles.btn}
                      type="button"
                    >
                      dinner
                    </button>
                    <p className={styles.data}>07 Jan 2016</p>
                  </div>
                  <div className={styles.views}>
                    <div className={styles.view}>
                      <Eye />
                      <span>275</span>
                    </div>
                    <div className={styles.questions}>
                      <Answer />
                      <span>12</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.smallCard} ${styles.card3}`}>
                <div className={styles.content}>
                  <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                  </p>
                </div>
                <div className={styles.icons}>
                  <div className={styles.buttons}>
                    <button
                      className={styles.btn}
                      type="button"
                    >
                      sweets
                    </button>
                    <p className={styles.data}>07 Jan 2016</p>
                  </div>
                  <div className={styles.views}>
                    <div className={styles.view}>
                      <Eye />
                      <span>275</span>
                    </div>
                    <div className={styles.questions}>
                      <Answer />
                      <span>12</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recipes;
