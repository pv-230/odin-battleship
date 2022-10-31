import Player from './models/Player';
import Gameboard from './models/Gameboard';

// Controller variables
let player = null;
let computer = null;
let playerBoard = null;
let computerBoard = null;
let started = false;
let selectedShip = null;
let playerShips = [];

/**
 *
 * @param {object} gb Gameboard object.
 * @param {boolean} showShips True if gameboard should display ship positions
 */
const renderBoard = (gameboard, showShips) => {
  let tileGrid;

  // Selects the appropriate board
  if (showShips) {
    tileGrid = document.querySelector(
      '.gameboard_left > .gameboard__tile-grid'
    );
  } else {
    tileGrid = document.querySelector(
      '.gameboard_right > .gameboard__tile-grid'
    );
  }

  // Clears previous rendering
  while (tileGrid.firstChild) {
    tileGrid.removeChild(tileGrid.firstChild);
  }

  // Creates the grid tiles
  let charCode = 65;
  for (; charCode <= 74; charCode++) {
    for (let col = 1; col <= 10; col++) {
      const tileStr = `${String.fromCharCode(charCode)}${col}`;
      const tile = document.createElement('div');

      tile.classList.add('gameboard__tile');
      tile.classList.add(`gameboard__tile_pos_${tileStr}`);
      tile.setAttribute('data-tile', tileStr);

      // Marks ship postions for player's board
      if (showShips && gameboard.getTile(tileStr).ship) {
        tile.classList.add('gameboard__tile_ship');
      }

      // Marks misses
      if (gameboard.getTile(tileStr).status === 1) {
        tile.classList.add('gameboard__tile_missed');
      }

      // Marks hits
      if (gameboard.getTile(tileStr).status === 2) {
        tile.classList.add('gameboard__tile_hit');
      }

      // Register event listeners on unclicked target board tiles
      if (started && !showShips && gameboard.getTile(tileStr).status === 0) {
        tile.addEventListener('click', handlePlayerAttack);
      }

      // Register event listeners on player board for game start ship placement
      if (!started && showShips) {
        tile.addEventListener('mouseover', showShipPlacement);
        tile.addEventListener('click', handleShipPlacement);
      }

      tileGrid.appendChild(tile);
    }
  }
};

/**
 * Allows the game to end and prevents any more moves from being made.
 */
const endGame = () => {
  const tiles = [
    ...document.querySelectorAll('.gameboard_right .gameboard__tile'),
  ];

  tiles.forEach((tile) =>
    tile.removeEventListener('click', handlePlayerAttack)
  );
};

/**
 * Allows the computer to make its turn against the player when the player's
 * turn is over.
 */
const endTurn = () => {
  if (computerBoard.isDefeated()) {
    console.log(`${player.getName()} wins!`);
    endGame();
    return;
  }

  computer.attack(playerBoard);
  renderBoard(playerBoard, true);

  if (playerBoard.isDefeated()) {
    console.log(`${computer.getName()} wins!`);
    endGame();
  }
};

/**
 * Event handler for when the player clicks on a tile to attack.
 * @param {Event} e
 */
const handlePlayerAttack = (e) => {
  const tileStr = e.currentTarget.getAttribute('data-tile');
  const attackedTile = player.attack(computerBoard, tileStr);
  if (attackedTile) {
    renderBoard(computerBoard, false);
    endTurn();
  }
};

/**
 * Starts the game.
 */
// const startGame = () => {
//   started = true;
// };

/**
 * Clears the currently highlighted direction during ship placement.
 */
const clearDirection = () => {
  // Clears previously highlighted direction
  const rotators = [...document.querySelectorAll('.ship-direction__rotator')];
  rotators.forEach((rotator) => {
    rotator.style.setProperty('background-color', 'white');
  });
};

/**
 * Highlights the currently selected ship direction during placement.
 */
const showDirection = () => {
  if (!selectedShip) return;
  clearDirection();

  // Highlights the current direction
  let rotator = null;
  if (selectedShip.direction === 'UP') {
    rotator = document.querySelector('.ship-direction__rotator_up');
  } else if (selectedShip.direction === 'RIGHT') {
    rotator = document.querySelector('.ship-direction__rotator_right');
  } else if (selectedShip.direction === 'DOWN') {
    rotator = document.querySelector('.ship-direction__rotator_down');
  } else if (selectedShip.direction === 'LEFT') {
    rotator = document.querySelector('.ship-direction__rotator_left');
  }
  rotator.style.setProperty('background-color', '#dddddd');
};

const updatePlayerShipStatus = () => {
  const shipElements = [...document.querySelectorAll('.player-ships__ship')];
  shipElements.forEach((shipElement) => {
    shipElement.style.setProperty('background-color', 'white');
  });
};

/**
 * Registers event handlers to allow player to select and place ships.
 */
const registerShipSelectors = () => {
  let currentOption = null;

  // Allows the carrier to be selected for placement
  const carrierOption = document.querySelector('.player-ships__ship_carrier');
  carrierOption.addEventListener('click', (e) => {
    if (currentOption) {
      currentOption.style.setProperty('background-color', 'white');
    }
    currentOption = e.currentTarget;
    currentOption.style.setProperty('background-color', 'aquamarine');
    selectedShip = { length: 5, direction: 'DOWN' };
    showDirection();
  });

  // Allows the battleship to be selected for placement
  const battleshipOption = document.querySelector(
    '.player-ships__ship_battleship'
  );
  battleshipOption.addEventListener('click', (e) => {
    if (currentOption) {
      currentOption.style.setProperty('background-color', 'white');
    }
    currentOption = e.currentTarget;
    e.currentTarget.style.setProperty('background-color', 'aquamarine');
    selectedShip = { length: 4, direction: 'DOWN' };
    showDirection();
  });

  // Allows the cruiser to be selected for placement
  const cruiserOption = document.querySelector('.player-ships__ship_cruiser');
  cruiserOption.addEventListener('click', (e) => {
    if (currentOption) {
      currentOption.style.setProperty('background-color', 'white');
    }
    currentOption = e.currentTarget;
    e.currentTarget.style.setProperty('background-color', 'aquamarine');
    selectedShip = { length: 3, direction: 'DOWN' };
    showDirection();
  });

  // Allows the submarine to be selected for placement
  const submarineOption = document.querySelector(
    '.player-ships__ship_submarine'
  );
  submarineOption.addEventListener('click', (e) => {
    if (currentOption) {
      currentOption.style.setProperty('background-color', 'white');
    }
    currentOption = e.currentTarget;
    e.currentTarget.style.setProperty('background-color', 'aquamarine');
    selectedShip = { length: 3, direction: 'DOWN' };
    showDirection();
  });

  // Allows the destroyer to be selected for placement
  const destroyerOption = document.querySelector(
    '.player-ships__ship_destroyer'
  );
  destroyerOption.addEventListener('click', (e) => {
    if (currentOption) {
      currentOption.style.setProperty('background-color', 'white');
    }
    currentOption = e.currentTarget;
    e.currentTarget.style.setProperty('background-color', 'aquamarine');
    selectedShip = { length: 2, direction: 'DOWN' };
    showDirection();
  });
};

/**
 * Resets all tile colors to white
 */
const resetTileColors = () => {
  const tiles = [
    ...document.querySelectorAll('.gameboard_left .gameboard__tile'),
  ];
  tiles.forEach((tile) => {
    tile.style.setProperty('background-color', 'white');
  });
};

/**
 * Shows where a selected ship will be placed on the grid.
 * @param {Event} e
 */
const showShipPlacement = (e) => {
  if (!selectedShip) return;
  resetTileColors();

  let tile = e.currentTarget;
  let tileStr = tile.getAttribute('data-tile');
  let tileLetter = tileStr.slice(0, 1).toUpperCase();
  let tileNum = parseInt(tileStr.slice(1), 10);
  tile.style.setProperty('background-color', 'aquamarine');

  // Up direction
  if (selectedShip.direction === 'UP') {
    for (let i = 0; i < selectedShip.length - 1; i++) {
      // Decrement the row letter
      tileLetter = String.fromCharCode(tileLetter.charCodeAt(0) - 1);
      if (tileLetter.charCodeAt(0) < 65) break;
      tileStr = `${tileLetter}${tileNum}`;
      tile = document.querySelector(`.gameboard__tile_pos_${tileStr}`);
      tile.style.setProperty('background-color', 'aquamarine');
    }
  }

  // Right direction
  if (selectedShip.direction === 'RIGHT') {
    for (let i = 0; i < selectedShip.length - 1; i++) {
      // Increment the column number
      tileNum++;
      if (tileNum > 10) break;
      tileStr = `${tileLetter}${tileNum}`;
      tile = document.querySelector(`.gameboard__tile_pos_${tileStr}`);
      tile.style.setProperty('background-color', 'aquamarine');
    }
  }

  // Down direction
  if (selectedShip.direction === 'DOWN') {
    for (let i = 0; i < selectedShip.length - 1; i++) {
      // Increment the row letter
      tileLetter = String.fromCharCode(tileLetter.charCodeAt(0) + 1);
      if (tileLetter.charCodeAt(0) > 74) break;
      tileStr = `${tileLetter}${tileNum}`;
      tile = document.querySelector(`.gameboard__tile_pos_${tileStr}`);
      tile.style.setProperty('background-color', 'aquamarine');
    }
  }

  // Left direction
  if (selectedShip.direction === 'LEFT') {
    for (let i = 0; i < selectedShip.length - 1; i++) {
      // Decrement the column number
      tileNum--;
      if (tileNum < 1) break;
      tileStr = `${tileLetter}${tileNum}`;
      tile = document.querySelector(`.gameboard__tile_pos_${tileStr}`);
      tile.style.setProperty('background-color', 'aquamarine');
    }
  }
};

/**
 * Event handler to allow player to rotate a ship's direction during placement.
 * @param {Event} e
 */
const handleRotation = (e) => {
  if (!selectedShip) return;
  selectedShip.direction = e.currentTarget.getAttribute('data-dir');
  showDirection();
};

const handleShipPlacement = (e) => {
  const tileStr = e.currentTarget.getAttribute('data-tile');

  try {
    playerBoard.placeShip(selectedShip.length, {
      origin: tileStr,
      direction: selectedShip.direction,
    });
    selectedShip = null;
    updatePlayerShipStatus();
    clearDirection();
    renderBoard(playerBoard, true);
  } catch (err) {
    console.error(err);
  }
};

/**
 * Initializes the start of the game.
 */
const initialize = () => {
  player = Player('Bob');
  computer = Player();
  playerBoard = Gameboard();
  computerBoard = Gameboard();

  renderBoard(playerBoard, true);
  renderBoard(computerBoard, false);
  registerShipSelectors();

  // Registers event handlers for ship rotation buttons
  const rotators = [...document.querySelectorAll('.ship-direction__rotator')];
  rotators.forEach((rotator) => {
    rotator.addEventListener('click', handleRotation);
  });

  // const grid = document.querySelector('.gameboard_left .gameboard__tile-grid');
  // grid.addEventListener('mouseleave', resetTileColors);
};

export default initialize;
