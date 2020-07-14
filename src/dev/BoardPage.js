import React from 'react';

import createPoolSetup from '../api/Setups/Pool';
import Board from '../components/Board';
import Bratiwka from '../components/Brawtiska';
import Poehavshi from '../components/Poehavshi';

export default function BoardPage() {
  return (
    <Board
      setup={createPoolSetup}
      left={<Bratiwka />}
      right={<Poehavshi />}
    />
  );
}