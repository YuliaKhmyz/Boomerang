// Наш герой.
const player = require('play-sound')(opts = {});

class Hero {
  constructor( position, boomerang) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = position;
    this.boomerang = boomerang;
    this.hasBoomerang = true;
    this.scores = 0;
    this.enemies_count = 0;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 5;
  }

  moveRight() {
    // Идём вправо.
    this.position += 5;
  }

  attack() {
    // Атакуем.
    setInterval(() => {
      // Let's play!
      this.boomerang.fly();
    }, 50);
  }

  die() {  
    this.skin = '💀';
    console.log(`\x1b[37mYOU ARE DEAD!💀`);
    console.log(`\x1b[34mYOUR SCORE IS \x1b[31m${this.scores}`);
    console.log(`\x1b[34mYOUR ENEMIES COUNT IS \x1b[31m${this.enemies_count}\n`);
    process.exit();
  }
}

module.exports = Hero;
