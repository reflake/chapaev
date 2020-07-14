export default function createVoice(message, soundPath) {

  let audio = null;
  let duration = null;

  const getAudio = () => audio || (audio = new Audio(soundPath));

  return {
    getMessage: () => message,
    getDuration: () => (duration || audio.duration) * 1000,
    play: async () => {
      
      let audio = getAudio();

      await audio.play();

      duration = audio.duration;

    },
    stop: () => {

      let audio = getAudio();

      audio.pause();
      audio.currentTime = 0;

    }
  }

}