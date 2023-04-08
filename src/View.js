 // Сделаем отдельный класс для отображения игры в консоли.


class View {

  render(track) {
    const yourTeamName = `Yulia, Ivan & Andrey`;

    // Тут всё рисуем.
    console.clear();
    console.log(track.join(''));
    console.log('\n\n');
    console.log(`\x1b[31mCreated by \x1b[37m"${yourTeamName}"\x1b[31m with love`);
  }
}

module.exports = View;
 