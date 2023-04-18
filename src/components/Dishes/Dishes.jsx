import React, { useContext, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { MyContext } from '../Context';
import { ReactComponent as Share } from '../../assets/icons/share.svg';
import styles from './dishes.module.scss';

const animation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};

function Dishes() {
  const { dishes, addProduct, setOpenCart } = useContext(MyContext);
  const addToCart = (item) => {
    addProduct(item);
    setOpenCart(true);
  };
  return (
    <section className={styles.dishes} id="dishes">
      <div className="container">
        <div className={styles.container}>
          <h3 className={styles.title}>Dish Of The Day</h3>
          <hr className="line" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.05, once: true }}
            className={styles.wrapperProducts}
          >
            {dishes.map((item, i) => (
              <MDish
                custom={i + 1}
                variants={animation}
                key={item.id}
                title={item.title}
                img={`../../assets/images/dishes/${item.img}`}
                imgWebp={item.imgWebp}
                description={item.description}
                rating={item.rating}
                ratingWebp={item.ratingWebp}
                label={item.label}
                addToCart={addToCart}
                item={item}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Dish = forwardRef(
  ({ img, imgWebp, title, description, rating, ratingWebp, label, addToCart, item }, ref) => (
    <div className={styles.dish} ref={ref}>
      <div className={styles.share}>
        <Share />
      </div>
      <div className={styles.dishImage}>
        <picture>
          <source srcSet={imgWebp} type="image/webp" />
          <img src={img} alt="dish" />
        </picture>
      </div>
      <div className={styles.dishBody}>
        <h4 className={styles.dishTitle}>{title}</h4>
        <p className={styles.dishLabel}>{label}</p>
        <div className={styles.dishDescription}>
          <p>{description}</p>
        </div>
        <div className={styles.rating}>
          <div className={styles.stars}>
            <picture>
              <source srcSet={ratingWebp} type="image/webp" />
              <img src={rating} alt="rating" />
            </picture>
            <span>12</span>
          </div>
          <button type="button" className={styles.dishBtn} onClick={() => addToCart(item)}>
            ORDER
          </button>
        </div>
      </div>
    </div>
  ),
);

Dish.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  imgWebp: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  ratingWebp: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  item: PropTypes.shape.isRequired,
};

const MDish = motion(Dish);

export default Dishes;
