import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-unresolved
import { register } from 'swiper/element/bundle';
import styles from './about.module.scss';

register();
function About() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      centeredSlides: true,
      speed: 500,
      slidesPerView: 1,
      gridRows: 1,
      injectStyles: [
        `
        .swiper-button-next,
        .swiper-button-prev {
          background-color: white;
          background-position: center;
          background-size: 40px;
          background-repeat: no-repeat;
          padding: 8px 16px;
          border-radius: 100%;
          border: 2px solid black;
          color: red;

          &:hover {
            background-color: green;
          }
        }

        .swiper-button-prev {
          // background-image: url("../../assets/icons/cart-outline.svg");
        }

        .swiper-button-next {
          // background-image: url("../../assets/icons/cart-arrow-down.svg");
        }

        // .swiper-button-next::after,
        // .swiper-button-prev::after {
        //     content: "";
        //   }
`,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.container}>
          <h3 className={styles.title}>The Basics Of Healthy Food</h3>
          <p className={styles.text}>
            In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint
            ea aliquip aliquip consectetur voluptate est. Eu minim dolore
            laboris enim mollit voluptate irure esse aliquip.
          </p>
          <div className={styles.slider}>
            <swiper-container
              class={styles.mySwiper}
              ref={swiperRef}
              init="false"
            >
              <swiper-slide class={styles.slide}>1</swiper-slide>
              <swiper-slide class={styles.slide}>2</swiper-slide>
              <swiper-slide class={styles.slide}>3</swiper-slide>
            </swiper-container>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
