import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import PlayerFace from './components/PlayerFace';

function App() {

  return (
    <div className="App">
      <PlayerFace faceImage='media/brawtiska.png' hisTurn name='братишка' />
    </div>
  );

}

export default App;
