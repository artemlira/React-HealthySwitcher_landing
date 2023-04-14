import React, { useContext, useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { motion } from 'framer-motion';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as CartEmpty } from '../../assets/icons/cart-outline.svg';
import { ReactComponent as CartLoaded } from '../../assets/icons/cart-arrow-down.svg';
import { MyContext } from '../Context';
import styles from './header.module.scss';

const animation = {
  hidden: {
    x: '100%',
    scale: 0.3,
  },
  visible: {
    x: 0,
    scale: 1,
    transition: { duration: 0.4 },
  },
  exit: {
    x: '100%',
  },
};

function Header() {
  const { products } = useContext(MyContext);
  const [openMenu, setOpenMenu] = useState();

  const closeMenuClick = () => {
    setOpenMenu(false);
  };

  const closeMenuKey = (e) => {
    if (e.type === 'keydown' && e.key === 'Enter') {
      setOpenMenu(false);
    }
  };

  const managementMenuKey = (e) => {
    if (e.type === 'keydown' && e.key === 'Enter') {
      setOpenMenu(!openMenu);
    }
  };
  return (
    <header className={styles.header}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          className={styles.container}
        >
          <a
            href="#vf"
            className={styles.logo}
          >
            <Logo />
          </a>
          {!openMenu ? (
            <Menu
              variants={animation}
              openMenu={openMenu}
              closeMenuClick={closeMenuClick}
              closeMenuKey={closeMenuKey}
              products={products}
            />
          ) : (
            <MMenu
              variants={animation}
              openMenu={openMenu}
              closeMenuClick={closeMenuClick}
              closeMenuKey={closeMenuKey}
              products={products}
            />
          )}
          <div
            role="button"
            tabIndex={0}
            className={
              !openMenu
                ? `${styles.burgerMenu}`
                : `${styles.burgerMenu} ${styles.active}`
            }
            onClick={() => setOpenMenu(!openMenu)}
            onKeyDown={(e) => managementMenuKey(e)}
          >
            <span
              className={
                !openMenu
                  ? `${styles.menuTablet}`
                  : `${styles.menuTablet} ${styles.active}`
              }
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
}

const Menu = forwardRef(
  ({ openMenu, closeMenuClick, closeMenuKey, products }, ref) => (
    <div
      className={
        !openMenu
          ? `${styles.navWrapper}`
          : `${styles.navWrapper} ${styles.active}`
      }
      ref={ref}
    >
      <nav
        className={
          !openMenu ? `${styles.nav}` : `${styles.active} ${styles.nav}`
        }
      >
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a
              href="/"
              onClick={() => closeMenuClick()}
              onKeyDown={(e) => closeMenuKey(e)}
            >
              Menu
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#nk"
              onClick={() => closeMenuClick()}
              onKeyDown={(e) => closeMenuKey(e)}
            >
              Recipes
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#mkl"
              onClick={() => closeMenuClick()}
              onKeyDown={(e) => closeMenuKey(e)}
            >
              Chefs
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#xs"
              onClick={() => closeMenuClick()}
              onKeyDown={(e) => closeMenuKey(e)}
            >
              Contacts
            </a>
          </li>
        </ul>
        <div className={styles.cart}>
          {products.length === 0 ? (
            <CartEmpty className={styles.cartEmpty} />
          ) : (
            <>
              <CartLoaded className={styles.cartLoaded} />
              <span className={styles.cartCount}>{products.length}</span>
            </>
          )}
        </div>
      </nav>
    </div>
  ),
);

Menu.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  closeMenuClick: PropTypes.func.isRequired,
  closeMenuKey: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const MMenu = motion(Menu);

export default Header;
