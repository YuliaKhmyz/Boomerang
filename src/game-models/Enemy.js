// Враг.

class Enemy {
  constructor(position) {
    this.generateSkin();
    this.position = position || 50;
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.position = undefined;
    this.generateSkin();
    this.position = 50;
    // this.position = this.generateSkin();
    // console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
