import '../styles/player.css'

import React from 'react';

const breakIntoLetters = (txt, delta, invert = false) => {

  const startDegree = -txt.length * delta * 0.5;

  if (invert) {

    return (
      [...txt].reverse().map((c, i) => <span style={
        {
          transform: `translate(-50%, -50%) rotate(${startDegree + delta * i}deg) `
        }
      } className='player-turn-letter invert'>{c}</span>)
    )

  }

  return (
    [...txt].map((c, i) => <span style={
      {
        transform: `translate(-50%, -50%) rotate(${startDegree + delta * i}deg) `
      }
    } className='player-turn-letter'>{c}</span>)
  )

};

export default function Bratiwka({}) {

  return (
    <div className='player left'>
      <div className='player-cover'>
        <div className='player-face' style={{backgroundImage: 'url(media/brawtiska.png)'}} />
      </div>
      <span className='player-turn'>{breakIntoLetters('TAKE YOUR TURN', 10.5)}</span>
      <span className='player-turn'>{breakIntoLetters('БРАТИШКА', 10.5, true)}</span>
    </div>
  )

};