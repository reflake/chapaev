import '../styles/talk.css';

import React from 'react';
import { Transition } from 'react-transition-group';

const tailPolyline = '0,2 5,2 1,26 19,2 21,2';
const tailPolygon = '5,0 5,2 1,26 19,2 19,0';

const lifetime = 100;

const transitionClassNames = {
  entering: 'talk-cloud', entered: 'talk-cloud',
  exiting: 'talk-cloud-disappear', exited: 'talk-cloud-disappear',
}

export default function Cloud({inProp, right, children}) {
  return (
    <Transition unmountOnExit in={inProp} timeout={lifetime}>
      { state => (
        <div className='talk'>
          <div className={transitionClassNames[state]}>
            <div className='talk-bg'>{children}</div>
            <svg className='talk-tail' width='21' height='27'>
              <polygon points={tailPolygon} />
              <polyline points={tailPolyline} />
            </svg>
          </div>
        </div>
      )}
    </Transition>
  )
};