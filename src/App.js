import React from 'react';
import './App.css';
import Header from "./Components/Header"
import Cards from "./Components/Cards"
import SwipeButtons from './Components/SwipeButtons';

function App() {
  return (
    <div className="app">
      <Header/>
      <Cards/>
      <SwipeButtons/>
      {/**Swipe Buttons */}
    </div>
  );
}

export default App;
