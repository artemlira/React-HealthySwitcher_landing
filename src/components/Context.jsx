import React, { createContext, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const MyContext = createContext();

export default function Context({ children }) {
  // products that go to cart when you click on the "Add to cart" button
  const [products, setProducts] = useState([]);

  // determines the total number of products in the basket
  let totalProducts = 0;

  // eslint-disable-next-line no-return-assign
  products.forEach((item) => (totalProducts += item.amount));

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

  // добавление продукции в корзину
  // eslint-disable-next-line consistent-return
  function addProduct(item, pack) {
    if (pack === null) {
      return null;
    }
    setProducts([
      ...products,
      {
        id: products.length + 1,
        img: item.image,
        imgWebp: item.imageWebp,
        title: item.title,
        text: item.description,
        price: item.price,
        amount: item.amount,
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
    }),
    [products, setProducts, totalProducts, addProduct, removeProduct],
  );

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

Context.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
