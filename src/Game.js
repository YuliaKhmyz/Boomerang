// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const runInteractiveConsole = require('./keyboard')

const boomerang = new Boomerang();
const View = require('./View');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero(0, boomerang); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy(50);
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
    this.scores = 0;
    this.victoryScores = 5;
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
    this.track[this.enemy.position] = this.enemy.skin;
  }

  check() {
    if(this.hero.boomerang.position >= this.enemy.position) {
      this.enemy.die();
      this.hero.scores += 5;
      this.hero.boomerang.position = this.hero.position + 1;
      setInterval(() => {
        this.hero.boomerang.moveLeft();
      }, 50);
    }
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
  }


  play() {
    runInteractiveConsole(this.hero, this.track.length);
    // this.regenerateTrack();

    setInterval(() => {
      // Let's play!
      this.enemy.moveLeft();
      this.regenerateTrack();
      this.check();
      this.view.render(this.track);
    }, 1000);
  }
}

module.exports = Game;
