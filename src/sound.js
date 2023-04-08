const player = require('play-sound')({});

class BackgroundMusic {
  congratulations() {
    player.play('./src/sounds/congratulations.wav');
  }

  glitch() {
    player.play('./src/sounds/glitch-in-the-matrix.wav');
  }

  hold() {
    player.play('./src/sounds/hold-your-horses.wav');
  }

  twirl() {
    player.play('./src/sounds/twirl.wav');
  }
}

module.exports = BackgroundMusic;