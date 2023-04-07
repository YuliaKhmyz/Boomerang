// Враг.
const Boomerang = require("./Boomerang");
const boomerang = new Boomerang();

class Enemy {
  constructor(position) {
    this.generateSkin();
    this.position = position || 20;
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  dieEnemy() {
    this.position = boomerang.position;
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
