import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MyContext } from '../Context';
import { ReactComponent as ModalCart } from '../../assets/icons/modal-cart.svg';
import { ReactComponent as Delete } from '../../assets/icons/delete-outline.svg';
import styles from './cart.module.scss';

function Cart() {
  const { products, removeProduct, openCart, setOpenCart } = useContext(MyContext);
  const variant = {
    hidden: {
      opacity: 0,
      translateY: 100,
    },
    visible: {
      opacity: 1,
      translateY: 0,
    },
  };

  if (!openCart) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.section
        className="cart"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
        }}
      >
        <motion.div
          variants={variant}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{
            duration: 0.3,
            delay: 0.3,
            type: 'spring',
            dumpig: 15,
          }}
          className={styles.container}
        >
          <span
            role="presentation"
            className={styles.close}
            onClick={() => setOpenCart(false)}
          />
          {products.length === 0 ? (
            <div className={styles.cartEmpty}>
              <div className={styles.image}>
                <ModalCart />
              </div>
              <p className={styles.text}>Basket is empty</p>
            </div>
          ) : (
            <div className={styles.cartLoaded}>
              <ul className={styles.productsList}>
                {products.map((item) => (
                  <li
                    className={styles.product}
                    key={item.id}
                  >
                    <div className={styles.productWrapper}>
                      <div className={styles.productImg}>
                        <picture>
                          <source
                            srcSet={item.imgWebp}
                            type="image/webp"
                          />
                          <img
                            src={item.img}
                            alt={item.title}
                          />
                        </picture>
                      </div>
                      <p className={styles.title}>{item.title}</p>
                      <p className={styles.label}>{item.label}</p>
                    </div>
                    <span
                      className={styles.remove}
                      onClick={() => removeProduct(item)}
                      role="presentation"
                    >
                      <Delete />
                    </span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={styles.next}
                onClick={() => setOpenCart(false)}
              >
                Continue shopping
              </button>
            </div>
          )}
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}

export default Cart;
