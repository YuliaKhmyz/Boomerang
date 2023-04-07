// Враг.
const Boomerang = require("./Boomerang");
const boomerang = new Boomerang();

class Enemy {
  constructor(position, skin) {
    this.skin = this.generateSkin();
    this.position = position;
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    let skin = skins[Math.floor(Math.random() * skins.length)];
    return skin;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  dieEnemy() {
          this.generateSkin() = 
    console.log('Enemy is dead!');
  
}
}

module.exports = Enemy;
