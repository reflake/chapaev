import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import createPoolSetup from './api/Setups/Pool';
import Board from './components/Board';
import Bratiwka from './components/Brawtiska';
import Poehavshi from './components/Poehavshi';

function App() {

  return (
    <div className="App">
      <Board
        setup={createPoolSetup}
        left={<Bratiwka />}
        right={<Poehavshi />}
      />
    </div>
  );

}

export default App;
