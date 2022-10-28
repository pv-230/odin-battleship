import Player from './models/Player';
import Gameboard from './models/Gameboard';

// Controller variables
let player = null;
let computer = null;
let playerBoard = null;
let computerBoard = null;

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
 * Allows the computer to make its turn against the player when the player's
 * turn is over.
 */
const endTurn = () => {
  if (computerBoard.isDefeated()) {
    console.log(`${player.getName()} wins!`);
  }

  computer.attack(playerBoard);
  renderBoard(playerBoard, true);

  if (playerBoard.isDefeated()) {
    console.log(`${computer.getName()} wins!`);
  }
};

/**
 * Allows the player to click on enemy tiles to attack them.
 */
const addAttackHandlers = () => {
  const tiles = [
    ...document.querySelectorAll('.gameboard_right > .gameboard__tile'),
  ];

  tiles.forEach((tile) => {
    tile.addEventListener('click', (e) => {
      const tileStr = e.currentTarget.getAttribute('data-tile');
      // TODO: Add UI message for if the tile has already been attacked
      player.attack(computerBoard, tileStr);
      renderBoard(computerBoard, false);
      addAttackHandlers(computerBoard);
      endTurn();
    });
  });
};

/**
 * Initializes the start of the game.
 */
const initialize = () => {
  player = Player('Bob');
  computer = Player();
  playerBoard = Gameboard();
  computerBoard = Gameboard();

  playerBoard.placeShip(5, { origin: 'A1', direction: 'DOWN' });
  playerBoard.placeShip(4, { origin: 'A3', direction: 'DOWN' });
  playerBoard.placeShip(3, { origin: 'A5', direction: 'DOWN' });
  playerBoard.placeShip(3, { origin: 'A7', direction: 'DOWN' });
  playerBoard.placeShip(2, { origin: 'A9', direction: 'DOWN' });
  computerBoard.placeShip(5, { origin: 'J1', direction: 'UP' });
  computerBoard.placeShip(4, { origin: 'J3', direction: 'UP' });
  computerBoard.placeShip(3, { origin: 'J5', direction: 'UP' });
  computerBoard.placeShip(3, { origin: 'J7', direction: 'UP' });
  computerBoard.placeShip(2, { origin: 'J9', direction: 'UP' });

  renderBoard(playerBoard, true);
  renderBoard(computerBoard, false);
  addAttackHandlers();
};

export default initialize;
