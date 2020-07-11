import '../styles/player.css'

import React from 'react';

const breakIntoLetters = (txt, delta, invert = false) => {

  const startDegree = -txt.length * delta * 0.5;

  if (invert) {

    return (
      [...txt].reverse().map((c, i) => <span key={i} style={
        {
          transform: `translate(-50%, -50%) rotate(${startDegree + delta * i}deg) `
        }
      } className='player-turn-letter invert'>{c}</span>)
    )

  }

  return (
    [...txt].map((c, i) => <span key={i} style={
      {
        transform: `translate(-50%, -50%) rotate(${startDegree + delta * i}deg) `
      }
    } className='player-turn-letter'>{c}</span>)
  )

};

export default function Poehavshi({}) {

  return (
    <div className='player right'>
      <div className='player-cover'>
        <div className='player-face' style={{backgroundImage: 'url(media/poehavshi.png)'}} />
      </div>
      <span className='player-turn'>{breakIntoLetters('ПОЕХАВШИЙ', 10.5, true)}</span>
    </div>
  )

};