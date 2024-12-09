import React from 'react';
import './index.css';
import Search from './Search';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Search Page</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
