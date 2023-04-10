// Основной файл.
// Запускает игру.
const GameMain = require('./src/Game');

// Инициализация игры с настройками.
const game = new GameMain({
  trackLength: 50,
});

// Запуск игры.
game.play();
