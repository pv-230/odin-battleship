import './gameboard.css';
import '../../models/Gameboard';
import '../../models/Player';

/**
 *
 * @param {object} gb Gameboard object.
 * @param {object} p Player object.
 */
const displayBoard = (gameboard, showShips) => {
  let gameboardDOM;

  // Selects the appropriate board
  if (showShips) {
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
      if (showShips && gameboard.getTile(tileStr).ship) {
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
