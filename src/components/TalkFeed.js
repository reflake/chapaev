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
  
  const [{message, duration, hide}, dispatch] = useReducer(feedReducer, {message: null, hide: true});

  if (!feed) throw 'No feed presented';

  useEffect(() => {

    let subscription = feed.subscribe((message, duration) => dispatch({type: 'SHOW', payload: { message, duration }}));
    return subscription.unsubscribe;

  }, [dispatch, feed]);

  useEffect(() => {
    
    let timeout = setTimeout(() => dispatch({type: 'HIDE'}), duration);
    return () => clearTimeout(timeout);

  }, [dispatch, hide, message, duration]);

  return <Cloud key={message} inProp={!hide}>{message}</Cloud>;
}