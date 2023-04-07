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
    this.enemy = new Enemy(this.trackLength);
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
    if (this.hero.boomerang.position === this.enemy.position) {
      this.enemy.dieEnemy();
       
    }
    // this.enemy.generateSkin();
  }

  boomerangMove() {
    this.hero.boomerang.moveRight();
  }

  play() {
    runInteractiveConsole(this.hero, this.track.length);
    // this.regenerateTrack();

    setInterval(() => {
      // Let's play!
      this.regenerateTrack();
      this.check();
      this.boomerangMove();
      this.view.render(this.track);
    }, 500);
  }
}

module.exports = Game;
