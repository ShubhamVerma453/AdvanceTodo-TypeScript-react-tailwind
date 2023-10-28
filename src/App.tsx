import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  return (
    <div className="App">
      <Header toggleMenu={toggleMenu} isOpen={menuOpen} />
    </div>
  );
}

export default App;
