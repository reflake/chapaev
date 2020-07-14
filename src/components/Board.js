import '../styles/board.css';

import React, { useEffect, useRef } from 'react';

const Board = ({setup, left, right, turnCallback}) => {

  const container = useRef(null);

  useEffect(() => setup(container.current).stop, [container])

  return (
    <div className='board'>
      <div className='board-container left'>{left}</div>
      <div className='board-container' ref={container} />
      <div className='board-container right'>{right}</div>
    </div>
  );

}

export default Board;