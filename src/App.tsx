import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import TodoBoard from './components/TodoBoard';

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  const toggleMenu = () => {
    setSideBarOpen(prevSideBarOpen => !prevSideBarOpen);
  };

  return (
    <div className="App dark:text-white dark:bg-[#2b2c37]">
      <Header toggleMenu={toggleMenu} isOpen={sideBarOpen} />
      <div>
        <SideBar isOpen={sideBarOpen}/>
        <TodoBoard isOpen={sideBarOpen}/>
      </div>
    </div>
  );
}

export default App;
