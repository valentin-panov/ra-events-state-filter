import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
  return (
    <div className='App'>
      <Portfolio filters={filters} />
    </div>
  );
}

export default App;
