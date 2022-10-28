import './gameboard.css';
import { endTurn } from '../../controllers/GameController';

/**
 *
 * @param {object} gb Gameboard object.
 * @param {boolean} showShips True if gameboard should display ship positions
 */
const renderBoard = (gameboard, showShips) => {
  let gameboardDOM;

  // Selects the appropriate board
  if (showShips) {
    gameboardDOM = document.querySelector('.gameboard_left');
  } else {
    gameboardDOM = document.querySelector('.gameboard_right');
  }

  // Clears previous rendering
  while (gameboardDOM.firstChild) {
    gameboardDOM.removeChild(gameboardDOM.firstChild);
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

/**
 * Allows the player to click on enemy tiles to attack them.
 * @param {object} player Player object that can attack the board.
 * @param {object} targetBoard The target board to attack.
 */
const addAttackHandlers = (player, targetBoard) => {
  const tiles = [
    ...document.querySelectorAll('.gameboard_right > .gameboard__tile'),
  ];

  tiles.forEach((tile) => {
    tile.addEventListener('click', (e) => {
      const tileStr = e.currentTarget.getAttribute('data-tile');
      // TODO: Add UI message for if the tile has already been attacked
      player.attack(targetBoard, tileStr);
      renderBoard(targetBoard, false);
      addAttackHandlers(player, targetBoard);
      endTurn();
    });
  });
};

export { renderBoard, addAttackHandlers };
