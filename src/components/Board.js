import '../styles/board.css';

import React, { useEffect, useRef } from 'react';

const Board = ({setup, left, right}) => {

  const container = useRef(null);

  useEffect(() => setup(container.current).stop, [container])

  return (
    <div className='board'>
      <div className='left'>{left}</div>
      <div ref={container} />
      <div className='right'>{right}</div>
    </div>
  );

}

export default Board;