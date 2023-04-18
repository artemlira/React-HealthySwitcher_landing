import React, { useContext, useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
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
  const { products, setOpenCart, openModalCart } = useContext(MyContext);
  const [openMenu, setOpenMenu] = useState();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

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
        <motion.div initial="hidden" animate="visible" exit="exit" className={styles.container}>
          <p role="presentation" onClick={() => scrollToTop()} className={styles.logo}>
            <Logo />
          </p>
          {!openMenu ? (
            <Menu
              variants={animation}
              openMenu={openMenu}
              closeMenuClick={closeMenuClick}
              closeMenuKey={closeMenuKey}
              products={products}
              setOpenCart={setOpenCart}
              openModalCart={openModalCart}
              scrollToTop={scrollToTop}
            />
          ) : (
            <MMenu
              variants={animation}
              openMenu={openMenu}
              closeMenuClick={closeMenuClick}
              closeMenuKey={closeMenuKey}
              products={products}
              setOpenCart={setOpenCart}
              openModalCart={openModalCart}
              scrollToTop={scrollToTop}
            />
          )}
          <div
            role="button"
            tabIndex={0}
            className={!openMenu ? `${styles.burgerMenu}` : `${styles.burgerMenu} ${styles.active}`}
            onClick={() => setOpenMenu(!openMenu)}
            onKeyDown={(e) => managementMenuKey(e)}
          >
            <span
              className={
                !openMenu ? `${styles.menuTablet}` : `${styles.menuTablet} ${styles.active}`
              }
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
}

const Menu = forwardRef(
  (
    { openMenu, closeMenuClick, closeMenuKey, products, setOpenCart, openModalCart, scrollToTop },
    ref,
  ) => (
    <div
      className={!openMenu ? `${styles.navWrapper}` : `${styles.navWrapper} ${styles.active}`}
      ref={ref}
    >
      <nav className={!openMenu ? `${styles.nav}` : `${styles.active} ${styles.nav}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <p
              role="presentation"
              onClick={() => {
                closeMenuClick();
                scrollToTop();
              }}
              onKeyDown={(e) => closeMenuKey(e)}
            >
              Menu
            </p>
          </li>
          <li className={styles.navItem}>
            <a href="#recipes" onClick={() => closeMenuClick()} onKeyDown={(e) => closeMenuKey(e)}>
              Recipes
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#chefs" onClick={() => closeMenuClick()} onKeyDown={(e) => closeMenuKey(e)}>
              Chefs
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#social" onClick={() => closeMenuClick()} onKeyDown={(e) => closeMenuKey(e)}>
              Contacts
            </a>
          </li>
        </ul>
        <div
          role="presentation"
          className={styles.cart}
          onClick={() => setOpenCart(true)}
          onKeyDown={(e) => openModalCart(e)}
        >
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
  setOpenCart: PropTypes.func.isRequired,
  openModalCart: PropTypes.func.isRequired,
  closeMenuKey: PropTypes.func.isRequired,
  scrollToTop: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const MMenu = motion(Menu);

export default Header;
