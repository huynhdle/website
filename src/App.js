import React from 'react';
import Navbar from './assets/Navbar';
import Footer from './assets/Footer';
import RandomBlock from './assets/RandomBlock';
import Hello from './assets/Hello';

function App() {
  return (
    <div>
      <Navbar/>
      <Hello/>
      <RandomBlock/>
      <RandomBlock/>
      <RandomBlock/>
      <RandomBlock/>
      <Footer/>
    </div>
  );
}

export default App;
