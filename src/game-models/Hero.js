// Наш герой.
class Hero {
  constructor( position, boomerang) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = position;
    this.boomerang = boomerang;
    this.hasBoomerang = true;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack(trackLength) {
    // Атакуем.
    // this.boomerang.fly();
    if (this.hasBoomerang) {
      this.boomerang.position = this.position + 1
      this.boomerang.fly(trackLength);
      this.hasBoomerang = false;
    }
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
