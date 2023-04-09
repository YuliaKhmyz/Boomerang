// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().
const BackgroundMusic = require('./sound');
const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const runInteractiveConsole = require('./keyboard');
const { User, Games_statistic } = require("../db/models");

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
    this.backgroundMusic = new BackgroundMusic();
    this.regenerateTrack();
    this.scores = 0;
    this.enemies_count = 0;
  }

  async fillInDataBase() {
    try {
      const user = await User.findOrCreate({
        where: { username: `${process.argv[2]}` },
        
      });
      const result = await Games_statistic.create({
        user_id: user[0].dataValues.id,
        scores: this.hero.scores,
        enemies_count: this.enemies_count,
      });
      // this.hero.scores = 0;
      process.exit();
      return result;
    } catch (err) {
      console.log(err);
    }
  };

  // createDataBase = async () => {
  //   try {
  //     const user = await User.findOrCreate({
  //       where: {name: `${process.argv[2]}`},
  //     });
  //     const res = await Games_statistic.create({
  //       player_id: user[0].dataValues.id,
  //       points: this.hero.points,
  //       game_time: this.timeScore,
  //       dead_enemies: this.deadEnemies,
  //     });
  //     this.hero.scores = 0;
  //     process.exit();
  //     return res;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
      this.backgroundMusic.twirl();
      this.enemy.die();
      this.hero.scores += 5;
      this.enemies_count += 1;
      this.hero.boomerang.position = this.hero.position + 1;
      setInterval(() => {
        this.hero.boomerang.moveLeft();
      }, 50);
    }
    if (this.hero.position === this.enemy.position) {
      this.fillInDataBase();
      this.backgroundMusic.hold();
      this.hero.die();
    }
  }

  play() {
    this.backgroundMusic.glitch();
    runInteractiveConsole(this.hero, this.track.length);

    setInterval(() => {
      // Let's play!
      this.enemy.moveLeft();
      this.regenerateTrack();
      this.check();
      this.view.render(this.track);
    }, 50);
  }
}

module.exports = Game;
