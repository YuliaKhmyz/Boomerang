// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

// const Enemy = require('./Enemy');
// const enemy = new Enemy();
class Boomerang {
  constructor(skin, position, direction) {
    this.skin = skin ||'🌀';
    this.position = position || 1;
    // this.direction = direction;
  }

  fly() {
    this.position = this.position + 1;
    // this.direction = 1;

    // this.moveLeft();
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}

module.exports = Boomerang;