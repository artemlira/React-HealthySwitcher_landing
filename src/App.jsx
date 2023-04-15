import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Work from './components/Work/Work';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Work />
      </main>
      <Footer />
    </>
  );
}

export default App;
