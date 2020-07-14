import './_pages.css';

import React, { useState } from 'react';

import Bratiwka from '../components/Brawtiska';
import TalkFeed from '../components/TalkFeed';
import Poehavshi from '../components/Poehavshi';
import VoiceFeed from '../api/VoiceFeed';

const voicePathPrefix = ([_, path]) => [_, `/media/voice/${path}`];

const bVoices = [
  ['Воу!', 'brawtiska/whoa.mp3'],
  ['Давай. Ну, начни!', 'brawtiska/comeon_doit.mp3'],
  ['Ой епта!', 'brawtiska/ohshit.mp3'],
  ['Каждый проигрыш будешь по еблу получать.', 'brawtiska/punchyou_everylose.mp3'],
  ['Давай блять. Отжимайся!', 'brawtiska/_do_it_you_piece_of_shit.mp3'],
  ['Сам то не кабан?', 'brawtiska/_caban.mp3'],
  ['Ну что тебе говно понравилось что ли?', 'brawtiska/_did_you_like_shit.mp3'],
  ['У кого встанет, у тебя что ли?', 'brawtiska/_hardon.mp3'],
  ['Да нет, я не думаю.', 'brawtiska/_i_dont_think_so.mp3'],
  ['Я тебя сейчас убью нахуй.', 'brawtiska/_ill_kill_you.mp3'],
  ['Я здесь один.', 'brawtiska/_im_alone.mp3'],
  ['(Смех)', 'brawtiska/_laugh.mp3'],
  ['Или нет?!', 'brawtiska/_or_not.mp3'],
  ['Сидим тута. Двоем тута.', 'brawtiska/_we_sitting_here.mp3'],
  ['Что?!', 'brawtiska/_what.mp3'],
  ['Что ты несешь то вообще?!', 'brawtiska/_what_are_you_blabbering.mp3'],
  ['Кто мы то?!', 'brawtiska/_what_do_you_mean_we.mp3'],
  ['Пидарас ты а не лейтенант.', 'brawtiska/_youre_faggot.mp3'],
  ['Пить хочу.', 'brawtiska/_thirst.mp3'],
].map(voicePathPrefix);

const pVoices = [
  ['Двадцать раз.', 'poehavshi/20_times.mp3'],
  ['Нет.', 'poehavshi/no.mp3'],
  ['Да.', 'poehavshi/yes.mp3'],
  ['Ой! Ой!', 'poehavshi/oh_oh.mp3'],
  ['Ну что срать?', 'poehavshi/_do_you_want_me_to_shit.mp3'],
  ['Покушать то.', 'poehavshi/_eat.mp3'],
  ['Пельмень.', 'poehavshi/_meatball.mp3'],
  ['Нет, я не какал.', 'poehavshi/_no_i_didnt_shit.mp3'],
  ['Проголодался наверное?', 'poehavshi/_youre_hungry_right.mp3'],
  ['Как два фуфела.', 'poehavshi/_two_fufels.mp3'],
  ['(Смех)', 'poehavshi/_laugh.mp3'],
  ['Правильно!', 'poehavshi/_youre_right.mp3'],
  ['Ну не надо. Ну не стукай!', 'poehavshi/_dont_hit_me.mp3'],
  ['А раньше был такой, знаешь? ОП!', 'poehavshi/_op.mp3'],
  ['Ааа?', 'poehavshi/_aaa.mp3'],
  ['Ааа?', 'poehavshi/_aaa2.mp3'],
  ['Братишка.', 'poehavshi/_bro.mp3'],
  ['Да мне вообще всё равно.', 'poehavshi/_whatever.mp3'],
  ['Завтрак испортится!', 'poehavshi/_dinner_go_bad.mp3'],
  ['Здраститя!', 'poehavshi/_hello.mp3'],
  ['Здорово получается!', 'poehavshi/_youre_doing_well.mp3'],
  ['Здраститя!', 'poehavshi/_hello2.mp3'],
].map(voicePathPrefix);

const clickHandler = async (feed, voice) => feed.fireVoiceEvent(voice);

export default () => {

  const [bfeed] = useState(new VoiceFeed(bVoices));
  const [pfeed] = useState(new VoiceFeed(pVoices));

  return (
    <div className='center' style={{display: 'flex'}}>
      <div style={{maxWidth: '420px'}}>
        <Bratiwka hideName>
          <TalkFeed feed={bfeed} />
        </Bratiwka>
        {bfeed.voices.map((voice, i) => <button onClick={() => clickHandler(bfeed, voice)} key={i} children={voice.getMessage()} />)}
      </div>
      <div style={{width: '40px'}}></div>
      <div style={{maxWidth: '420px'}}>
        <Poehavshi className='right' hideName>
          <TalkFeed feed={pfeed} />
        </Poehavshi>
        {pfeed.voices.map((voice, i) => <button onClick={() => clickHandler(pfeed, voice)} key={i} children={voice.getMessage()} />)}
      </div>
    </div>
  );
};