import React from 'react';

import './App.css';
import Chart from "./Chart"
import CurrencyOptions from './CurrencyOptions';




function App() {
  return (
    <div className="App">
      <CurrencyOptions/>
      <Chart />
    </div>
  );
}

export default App;
