import React, { createContext, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { menu } from '../DB';

export const MyContext = createContext();

export default function Context({ children }) {
  // products that go to cart when you click on the "Add to cart" button
  const [products, setProducts] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  // determines the total number of products in the basket
  let totalProducts = 0;

  // eslint-disable-next-line no-return-assign
  products.forEach((item) => (totalProducts += item.amount));

  // Additional handler for the event of opening the cart by the Enter button
  const openModalCart = (e) => {
    if (e.type === 'keydown' && e.key === 'Enter') {
      setOpenCart(true);
    }
  };

  // Additional handler for the event of closing the cart by the Enter button
  const closeModalCart = (e) => {
    if (e.type === 'keydown' && e.key === 'Enter') {
      setOpenCart(false);
    }
  };

  // retrieve data from a local file
  useEffect(() => {
    setDishes(menu);
  }, []);

  // retrieve data from the database

  // const getData = () => {
  //   fetch('DB.json', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setDishes(data.products));
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  // write and retrieve data from LocalStorage
  useEffect(() => {
    if (products.length) {
      localStorage.setItem('products', JSON.stringify(products));
    } else {
      setTimeout(() => {
        localStorage.removeItem('products');
      }, 0);
    }
  }, [products]);

  useEffect(() => {
    const dataLocalStorage = JSON.parse(localStorage.getItem('products'));
    if (dataLocalStorage) {
      setProducts(dataLocalStorage);
    }
  }, []);

  // add products to cart
  // eslint-disable-next-line consistent-return
  function addProduct(item, pack) {
    if (pack === null) {
      return null;
    }
    setProducts([
      ...products,
      {
        id: products.length + 1,
        title: item.title,
        img: item.img,
        imgWebp: item.imgWebp,
        description: item.description,
        rating: item.rating,
        ratingWebp: item.ratingWebp,
        label: item.label,
      },
    ]);
  }

  // удаление продукции из корзины
  function removeProduct(item) {
    const elem = products.indexOf(item);
    const copy = JSON.parse(JSON.stringify(products));
    if (elem !== -1) {
      copy.splice(elem, 1);
      setProducts(copy);
    }
  }

  const value = useMemo(
    () => ({
      products,
      setProducts,
      totalProducts,
      addProduct,
      removeProduct,
      dishes,
      setDishes,
      openCart,
      setOpenCart,
      openModalCart,
      closeModalCart,
    }),
    [
      products,
      setProducts,
      totalProducts,
      addProduct,
      removeProduct,
      dishes,
      setDishes,
      openCart,
      setOpenCart,
      openModalCart,
      closeModalCart,
    ],
  );

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

Context.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
