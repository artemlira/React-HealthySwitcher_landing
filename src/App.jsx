import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Dishes from './components/Dishes';
import Chefs from './components/Chefs';
import Recipes from './components/Recipes';
import Social from './components/Social';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Cart />
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Work />
        <Dishes />
        <Chefs />
        <Recipes />
        <Social />
      </main>
      <Footer />
    </>
  );
}

export default App;
