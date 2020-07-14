import '../styles/player.css'

import React from 'react';

const breakIntoLetters = (text, delta, invert = false) => {

  const startAngle = -text.length * delta * 0.5;
  const letterClassName = invert ? 'player-turn-letter invert' : 'player-turn-letter';
  const letters = invert ? [...text].reverse() : [...text];

  return (
    letters.map((c, i) => <span key={i} style={
      {
        transform: `translate(-50%, -50%) rotate(${startAngle + delta * i}deg) `
      }
    } className={letterClassName}>{c}</span>)
  )
};

export default function PlayerFace({children, hideName, name, faceImage, hisTurn = false}) {

  const NAME = name && name.toUpperCase();

  return (
    <div className='player'>
      <div className='player-cover'>
        <div className='player-face' style={{backgroundImage: `url( ${faceImage} )`}} />
      </div>
      { hisTurn && <span className='player-turn'>{breakIntoLetters('TAKE YOUR TURN', 10.5)}</span> }
      { !hideName && name && <span className='player-turn'>{breakIntoLetters(NAME, 10.5, true)}</span> }
      {children}
    </div>
  )

};