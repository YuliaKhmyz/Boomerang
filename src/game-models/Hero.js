// Наш герой.
const player = require('play-sound')(opts = {});

class Hero {
  constructor( position, boomerang) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = position;
    this.boomerang = boomerang;
    this.hasBoomerang = true;
    this.scores = 0;
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
    console.log('YOU ARE DEAD!💀');
    console.log(`YOUR SCORE IS ${this.scores}`)
    process.exit();
  }
}

module.exports = Hero;
