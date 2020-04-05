import React from 'react';
import logo from './assets/images/logo.svg';
import './App.css';
import Hero01 from './components/Heroes/Hero01';

const App = () => {
  return (
    <div className="main-page-wrapper">
      <div className="main-page-inner">
        <img src={logo} alt="logo" />
        <h1 className="main-page-title">BRIGHT KIT</h1>
      </div>
    </div>
  );
}

export default App;
