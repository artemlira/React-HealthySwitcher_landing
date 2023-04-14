import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default App;
