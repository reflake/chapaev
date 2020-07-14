import createVoice from "./Voice";

export default class VoiceFeed {

  constructor(plainVoices = []) {

    this.listeners = [];
    this.voices = plainVoices.map(([_, __]) => createVoice(_, __));

  }

  async fireVoiceEvent(voice)
  {
    if (this.playingVoice)
    {
      this.playingVoice.stop();
    }

    await voice.play();

    this.playingVoice = voice;

    this.listeners.forEach(cb => cb(
      voice.getMessage(),
      voice.getDuration()
    ));
  }

  subscribe(callback) {

    this.listeners.push(callback);

    return { unsubscribe: () => this.unsubscribe(callback) };

  }

  unsubscribe(callback) {

    this.listeners.filter(a => a !== callback);

  }

}