import React from 'react';
import './App.css';
import FacePage from './dev/FacePage';
import BoardPage from './dev/BoardPage';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import TalkPage from './dev/TalkPage';

const devLinks = [
  ['board', 'Board test'],
  ['talk', 'Talk test'],
  ['face', 'Player face test'],
];

export default function App() {

  return (
    <Router>
        <nav>
          <ul>
            {
              devLinks.map(
                ([link, name], i) =>
                <li key={i}>
                  <Link to={`/${link}`} children={<>{name}</>} />
                </li>
            )}
          </ul>
        </nav>
      <div className='App'>
        <Route path='/board' children={<BoardPage />} />
        <Route path='/face' children={<FacePage />} />
        <Route path='/talk' children={<TalkPage />} />
      </div>
    </Router>
  );

}
