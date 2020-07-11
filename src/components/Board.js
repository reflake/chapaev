import '../styles/board.css';

import React, { useEffect, useRef } from 'react';

const Board = ({setup, left, right}) => {

  const container = useRef(null);

  useEffect(() => setup(container.current).stop, [container])

  return (
    <div className='board'>
      {left}
      <div ref={container} />
      {right}
    </div>
  );

}

export default Board;