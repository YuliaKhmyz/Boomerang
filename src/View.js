 // Сделаем отдельный класс для отображения игры в консоли.


class View {

  render(track) {
    const yourTeamName = `Yulia's team`;

    // Тут всё рисуем.
    console.clear();
    console.log(track.join(''));
    console.log('\n\n');
    console.log(`\x1b[31mCreated by "${yourTeamName}" with love`);
  }
}

module.exports = View;
 