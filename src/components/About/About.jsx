/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import Slide1 from '../../assets/images/fish.jpg';
import Slide1Webp from '../../assets/images/fish.webp';
import Slide2 from '../../assets/images/02.jpg';
import Slide2Webp from '../../assets/images/02.webp';
import Slide3 from '../../assets/images/dishes/02d.jpg';
import Slide3Webp from '../../assets/images/dishes/02d.webp';
import Slide4 from '../../assets/images/dishes/03d.jpg';
import Slide4Webp from '../../assets/images/dishes/03d.webp';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './about.module.scss';
import './sleder.scss';

function About() {
  const settings = {
    className: 'mySlider',
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

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
            <SlickSlider {...settings}>
              <div className="slide">
                <picture>
                  <source
                    srcSet={Slide1Webp}
                    type="image/webp"
                  />
                  <img
                    src={Slide1}
                    alt="red fish with vegetables"
                  />
                </picture>
              </div>
              <div className="slide">
                <picture>
                  <source
                    srcSet={Slide2Webp}
                    type="image/webp"
                  />
                  <img
                    src={Slide2}
                    alt="egg and vegetables"
                  />
                </picture>
              </div>
              <div className="slide">
                <picture>
                  <source
                    srcSet={Slide3Webp}
                    type="image/webp"
                  />
                  <img
                    src={Slide3}
                    alt="peas and beans"
                  />
                </picture>
              </div>
              <div className="slide">
                <picture>
                  <source
                    srcSet={Slide4Webp}
                    type="image/webp"
                  />
                  <img
                    src={Slide4}
                    alt="scrambled eggs with basil"
                  />
                </picture>
              </div>
            </SlickSlider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
