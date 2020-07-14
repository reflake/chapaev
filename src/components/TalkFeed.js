import '../styles/talk.css';

import React, { useEffect, useReducer } from 'react';
import Cloud from './Cloud';

function feedReducer(state = {}, action) {

  switch(action.type) {
    case 'HIDE':
      return { ...state, hide: true };
    case 'SHOW':
      return { ...state, hide: false, message: action.payload.message, duration: action.payload.duration };
  }

}

export default function TalkFeed({ feed }) {
  
  const [state, dispatch] = useReducer(feedReducer, {message: null, hide: true});

  if (!feed) throw 'No feed presented';

  useEffect(() => {

    let subscription = feed.subscribe((message, duration) => dispatch({type: 'SHOW', payload: { message, duration }}));
    return subscription.unsubscribe;

  }, [dispatch, feed, state.message]);

  useEffect(() => {
    
    let timeout = setTimeout(() => dispatch({type: 'HIDE'}), state.duration);
    return () => clearTimeout(timeout);

  }, [dispatch, state.message, state.duration]);

  return <Cloud key={state.message} inProp={!state.hide}>{state.message}</Cloud>;
}

export class Feed {

  constructor() {

    this.listeners = [];

  }

  addMessage(message, duration)
  {
    this.listeners.forEach(cb => cb(message, duration))
  }

  subscribe(callback) {

    this.listeners.push(callback);

    return { unsubscribe: () => this.unsubscribe(callback) };

  }

  unsubscribe(callback) {

    this.listeners.filter(a => a !== callback);

  }

}