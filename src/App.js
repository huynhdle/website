import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RandomBlock from './components/RandomBlock';

function App() {
  return (
    <div>
      <Navbar/>
      <RandomBlock/>
      <RandomBlock/>
      <RandomBlock/>
      <RandomBlock/>
      <RandomBlock/>
      <Footer/>
    </div>
  );
}

export default App;
