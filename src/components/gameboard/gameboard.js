import './gameboard.css';
import '../../models/Gameboard';
import '../../models/Player';

/**
 *
 * @param {object} gb Gameboard object.
 * @param {boolean} showShips True if gameboard should display ship positions
 */
const displayBoard = (gameboard, player) => {
  let gameboardDOM;

  // Selects the appropriate board
  if (player.isHuman()) {
    gameboardDOM = document.querySelector('.gameboard_left');
  } else {
    gameboardDOM = document.querySelector('.gameboard_right');
  }

  let charCode = 65;
  for (; charCode <= 74; charCode++) {
    for (let col = 1; col <= 10; col++) {
      const tileStr = `${String.fromCharCode(charCode)}${col}`;
      const tile = document.createElement('div');

      tile.classList.add('gameboard__tile');
      tile.setAttribute('data-tile', tileStr);

      // Marks ship postions for player's board
      if (player.isHuman() && gameboard.getTile(tileStr).ship) {
        tile.textContent = 'S';
      }

      // Marks misses
      if (gameboard.getTile(tileStr).status === 1) {
        tile.textContent = 'M';
      }

      // Marks hits
      if (gameboard.getTile(tileStr).status === 2) {
        tile.textContent = 'H';
      }

      gameboardDOM.appendChild(tile);
    }
  }
};

export { displayBoard };
