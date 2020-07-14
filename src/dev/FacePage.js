import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import './_pages.css';

import Bratiwka from '../components/Brawtiska';

export default () => {

  const [yourTurn, setYourTurn] = useState(false);

  return (
    <div className='center'>
      <Bratiwka hisTurn={yourTurn} />
      <button onClick={() => setYourTurn(!yourTurn)}>Toggle turn</button>
    </div>
  );
}