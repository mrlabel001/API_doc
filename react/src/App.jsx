import React, { useState } from 'react';
import './App.css';
import UnSplash from './UnSplash/UnSplash';
import RickMorty from './RickMorty/RickMorty';

function App() {
  const [activeTab, setActiveTab] = useState('unsplash');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
    <h1>API DOCUMENTATION</h1>
    <div className="app">
      <div className="tabs">
        <button
          className={activeTab === 'unsplash' ? 'active' : ''}
          onClick={() => handleTabClick('unsplash')}
        >
          UnSplash
        </button>
        <button
          className={activeTab === 'rickmorty' ? 'active' : ''}
          onClick={() => handleTabClick('rickmorty')}
        >
          RickMorty
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'unsplash' && <UnSplash />}
        {activeTab === 'rickmorty' && <RickMorty />}
      </div>
    </div>
    </>
  );
}

export default App;
