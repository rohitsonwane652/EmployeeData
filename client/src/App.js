import React from 'react'
import './App.css';
import Component from './Component/Component'
import ExpenseChart from './Component/ExpenseChart'

function App() {
  return (
    <div className="App d-flex flex-column">
      <Component />
      <ExpenseChart />
    </div>
  );
}

export default App;
