import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

export const MyContext = createContext();

export default function Context({ children }) {
  const value = useMemo(() => ({}), []);

  return (
    <MyContext.Provider value={value}>{children}</MyContext.Provider>
  );
}

Context.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
