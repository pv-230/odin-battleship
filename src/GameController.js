import Player from './models/Player';
import Gameboard from './models/Gameboard';

// Controller variables
let player = null;
let computer = null;
let playerBoard = null;
let computerBoard = null;
let started = false;
let selectedShip = null;

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
        tile.addEventListener('click', handleTileClick);
      }

      // Register event listeners on player board for game start ship placement
      if (!started && showShips) {
        tile.addEventListener('mouseover', showShipPlacement);
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

  tiles.forEach((tile) => tile.removeEventListener('click', handleTileClick));
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
const handleTileClick = (e) => {
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
const startGame = () => {};

/**
 * Registers event handlers to allow player to select and place ships.
 */
const registerShipSelectors = () => {
  let currentOption = null;

  // Allows the carrier to be selected for placement
  const carrierOption = document.querySelector('.player-ships__carrier');
  carrierOption.addEventListener('click', (e) => {
    if (currentOption) {
      currentOption.style.setProperty('background-color', 'white');
    }
    currentOption = e.currentTarget;
    currentOption.style.setProperty('background-color', 'aquamarine');
    selectedShip = { length: 5, direction: 1 };
  });

  // Allows the battleship to be selected for placement
  const battleshipOption = document.querySelector('.player-ships__battleship');
  battleshipOption.addEventListener('click', (e) => {
    if (currentOption) {
      currentOption.style.setProperty('background-color', 'white');
    }
    currentOption = e.currentTarget;
    e.currentTarget.style.setProperty('background-color', 'aquamarine');
    selectedShip = { length: 4, direction: 1 };
  });

  // Allows the cruiser to be selected for placement
  const cruiserOption = document.querySelector('.player-ships__cruiser');
  cruiserOption.addEventListener('click', (e) => {
    if (currentOption) {
      currentOption.style.setProperty('background-color', 'white');
    }
    currentOption = e.currentTarget;
    e.currentTarget.style.setProperty('background-color', 'aquamarine');
    selectedShip = { length: 3, direction: 1 };
  });

  // Allows the submarine to be selected for placement
  const submarineOption = document.querySelector('.player-ships__submarine');
  submarineOption.addEventListener('click', (e) => {
    if (currentOption) {
      currentOption.style.setProperty('background-color', 'white');
    }
    currentOption = e.currentTarget;
    e.currentTarget.style.setProperty('background-color', 'aquamarine');
    selectedShip = { length: 3, direction: 1 };
  });

  // Allows the destroyer to be selected for placement
  const destroyerOption = document.querySelector('.player-ships__destroyer');
  destroyerOption.addEventListener('click', (e) => {
    if (currentOption) {
      currentOption.style.setProperty('background-color', 'white');
    }
    currentOption = e.currentTarget;
    e.currentTarget.style.setProperty('background-color', 'aquamarine');
    selectedShip = { length: 2, direction: 1 };
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
  let tileStr = e.currentTarget.getAttribute('data-tile');
  let tileLetter = tileStr.slice(0, 1).toUpperCase();
  let tileNum = parseInt(tileStr.slice(1), 10);
  tile.style.setProperty('background-color', 'aquamarine');

  if (selectedShip.direction === 0) {
    for (let i = 0; i < selectedShip.length - 1; i++) {
      // Decrement the row letter
      tileLetter = String.fromCharCode(tileLetter.charCodeAt(0) - 1);
      tileStr = `${tileLetter}${tileNum}`;
      tile = document.querySelector(`.gameboard__tile_pos_${tileStr}`);
      if (tile) {
        tile.style.setProperty('background-color', 'aquamarine');
      }
    }
  }

  if (selectedShip.direction === 1) {
    for (let i = 0; i < selectedShip.length - 1; i++) {
      // Increment the row letter
      tileLetter = String.fromCharCode(tileLetter.charCodeAt(0) + 1);
      tileStr = `${tileLetter}${tileNum}`;
      tile = document.querySelector(`.gameboard__tile_pos_${tileStr}`);
      if (tile) {
        tile.style.setProperty('background-color', 'aquamarine');
      }
    }
  }

  if (selectedShip.direction === 2) {
    for (let i = 0; i < selectedShip.length - 1; i++) {
      // Decrement the column number
      tileNum--;
      tileStr = `${tileLetter}${tileNum}`;
      tile = document.querySelector(`.gameboard__tile_pos_${tileStr}`);
      if (tile) {
        tile.style.setProperty('background-color', 'aquamarine');
      }
    }
  }

  if (selectedShip.direction === 3) {
    for (let i = 0; i < selectedShip.length - 1; i++) {
      // Increment the column number
      tileNum++;
      tileStr = `${tileLetter}${tileNum}`;
      tile = document.querySelector(`.gameboard__tile_pos_${tileStr}`);
      if (tile) {
        tile.style.setProperty('background-color', 'aquamarine');
      }
    }
  }
};

const rotatePlacement = (e) => {
  // if (!selectedShip) return;
  // e.preventDefault();
  // if (e.deltaY < 0) {
  //   selectedShip = {
  //     ...selectedShip,
  //     direction: Math.abs((selectedShip.direction + 1) % 4),
  //   };
  // }
  // if (e.deltaY > 0) {
  //   selectedShip = {
  //     ...selectedShip,
  //     direction: Math.abs((selectedShip.direction - 1) % 4),
  //   };
  // }
  // console.log(selectedShip);
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

  const grid = document.querySelector('.gameboard_left .gameboard__tile-grid');
  grid.addEventListener('mouseleave', resetTileColors);
  grid.addEventListener('wheel', rotatePlacement);
};

export default initialize;
