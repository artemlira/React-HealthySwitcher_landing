import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Work from './components/Work/Work';
import Dishes from './components/Dishes/Dishes';
import Chefs from './components/Chefs/Chefs';
import Recipes from './components/Recipes/Recipes';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Work />
        <Dishes />
        <Chefs />
        <Recipes />
      </main>
      <Footer />
    </>
  );
}

export default App;
