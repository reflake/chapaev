import './_pages.css';

import React, { useState } from 'react';

import Bratiwka from '../components/Brawtiska';
import TalkFeed, { Feed } from '../components/TalkFeed';

const precache = ([_, sndPath]) => [_, new Audio(`/media/voice/brawtiska/${sndPath}`)];

const sounds = [
  ['Воу!', 'whoa.mp3'],
  ['Давай. Ну, начни!', 'comeon_doit.mp3'],
  ['Ой епта!', 'ohshit.mp3'],
  ['Каждый проигрыш будешь по еблу получать, окей?!', 'punchyou_everylose.mp3'],
].map(precache);

const clickHandler = (title, audio, feed) => {

  audio.play();
  feed.addMessage(title, audio.duration * 1000);
  
}

export default () => {

  const [feed] = useState(new Feed());

  return (
    <div className='center'>
      <Bratiwka hideName>
        <TalkFeed feed={feed} />
      </Bratiwka>
      {sounds.map(([title, path], i) => <button onClick={() => clickHandler(title, path, feed)} key={i} children={title} />)}
    </div>
  );
};