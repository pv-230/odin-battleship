import Player from './models/Player';
import Gameboard from './models/Gameboard';

// ============================================================================
//  Controller variables
// ============================================================================

let player = null;
let computer = null;
let playerBoard = null;
let computerBoard = null;
let started = false;
let selectedShip = null;
let playerShips = [];
let computerShips = [];
let playerAttackCount = 0;
let computerAttackCount = 0;

// ============================================================================
//  Gameboard functions
// ============================================================================

/**
 * Event handler for when the player clicks on a tile to attack.
 * @param {Event} e
 */
const handlePlayerAttack = (e) => {
  const tileStr = e.currentTarget.getAttribute('data-tile');
  const attackedTile = player.attack(computerBoard, tileStr);
  if (attackedTile) {
    playerAttackCount++;
    renderBoard(computerBoard, false);
    updateComputerShipStatus();

    // Check win condition
    if (computerBoard.isDefeated()) {
      endGame(player);
    } else {
      endTurn();
    }
  }
};

/**
 *
 * @param {object} gb Gameboard object.
 * @param {boolean} showShips True if gameboard should display ship positions
 */
const renderBoard = (gameboard, showShips) => {
  let tileGrid;

  // Selects the appropriate board
  if (showShips) {
    tileGrid = document.querySelector('.gameboard_player > .gameboard__tile-grid');
  } else {
    tileGrid = document.querySelector('.gameboard_computer > .gameboard__tile-grid');
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

      // Register event listeners on unclicked computer board tiles
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
 * Resets all tile colors to white
 */
const resetTileColors = () => {
  const tiles = [...document.querySelectorAll('.gameboard_player .gameboard__tile')];
  tiles.forEach((tile) => {
    tile.classList.remove('gameboard__tile_placement');
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
  tile.classList.add('gameboard__tile_placement');

  // Up direction
  if (selectedShip.direction === 'UP') {
    for (let i = 0; i < selectedShip.length - 1; i++) {
      // Decrement the row letter
      tileLetter = String.fromCharCode(tileLetter.charCodeAt(0) - 1);
      if (tileLetter.charCodeAt(0) < 65) break;
      tileStr = `${tileLetter}${tileNum}`;
      tile = document.querySelector(`.gameboard__tile_pos_${tileStr}`);
      tile.classList.add('gameboard__tile_placement');
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
      tile.classList.add('gameboard__tile_placement');
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
      tile.classList.add('gameboard__tile_placement');
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
      tile.classList.add('gameboard__tile_placement');
    }
  }
};

/**
 * Allows a player to place their selected ship before game start.
 */
const handleShipPlacement = (e) => {
  if (!selectedShip) return;

  try {
    const tileStr = e.currentTarget.getAttribute('data-tile');
    const ship = playerBoard.placeShip(selectedShip.length, {
      origin: tileStr,
      direction: selectedShip.direction,
    });

    playerShips.push({ type: selectedShip.type, ref: ship });

    // Updates the selected ship element
    const shipElement = document.querySelector(`.player-ships__ship_${selectedShip.type}`);
    shipElement.removeEventListener('click', handleShipSelection);
    shipElement.addEventListener('click', handleShipRemove);
    shipElement.classList.add('player-ships__ship_placed');
    selectedShip = null;

    // Hides ship direction controls
    const shipDirection = document.querySelector('.ship-direction');
    shipDirection.classList.add('hidden');

    // Updates other views
    updateShipCounter();
    updatePlayerShipStatus();
    clearDirection();
    renderBoard(playerBoard, true);
  } catch (err) {
    console.error(err);
  }
};

// ============================================================================
//  Ship status/selection functions
// ============================================================================

/**
 * Colors the ships in the player's ship status window according to their status.
 */
const updatePlayerShipStatus = () => {
  const shipElements = [...document.querySelectorAll('.player-ships__ship')];

  // Clear any highlighted ships
  shipElements.forEach((shipElement) => {
    shipElement.classList.remove('player-ships__ship_selected');

    // Determines if current ship element matches with an existing ship
    const shipType = shipElement.getAttribute('data-ship');
    const matchingShip = playerShips.find((ship) => ship.type === shipType);
    if (!matchingShip) return;

    // Updates the ship status color
    if (matchingShip.ref.isSunk()) {
      shipElement.classList.remove('player-ships__ship_damaged');
      shipElement.classList.add('player-ships__ship_sunk');
    } else if (matchingShip.ref.getHits() > 0) {
      shipElement.classList.remove('player-ships__ship_undamaged');
      shipElement.classList.add('player-ships__ship_damaged');
    } else {
      shipElement.classList.add('player-ships__ship_undamaged');
    }
  });
};

/**
 * Colors the ships in the computer's ship status window according to their status.
 */
const updateComputerShipStatus = () => {
  const shipElements = [...document.querySelectorAll('.computer-ships__ship')];

  // Clear any highlighted ships
  shipElements.forEach((shipElement) => {
    // Determines if current ship element matches with an existing ship
    const shipType = shipElement.getAttribute('data-ship');
    const matchingShip = computerShips.find((ship) => ship.type === shipType);
    if (!matchingShip) return;

    // Updates the ship status color
    if (matchingShip.ref.isSunk()) {
      shipElement.classList.remove('computer-ships__ship_damaged');
      shipElement.classList.add('computer-ships__ship_sunk');
    } else if (matchingShip.ref.getHits() > 0) {
      shipElement.classList.remove('computer-ships__ship_undamaged');
      shipElement.classList.add('computer-ships__ship_damaged');
    } else {
      shipElement.classList.add('computer-ships__ship_undamaged');
    }
  });
};

/**
 * Event handler for selecting a ship to place on the gameboard.
 * @param {Event} e
 */
const handleShipSelection = (e) => {
  const shipElements = [...document.querySelectorAll('.player-ships__ship')];
  const shipType = e.currentTarget.getAttribute('data-ship');

  // Clears any highlighted ships
  shipElements.forEach((shipElement) => {
    shipElement.classList.remove('player-ships__ship_selected');
  });

  // Highlights the currently selected ship
  e.currentTarget.classList.add('player-ships__ship_selected');

  if (shipType === 'carrier') {
    selectedShip = { type: shipType, length: 5, direction: 'DOWN' };
  } else if (shipType === 'battleship') {
    selectedShip = { type: shipType, length: 4, direction: 'DOWN' };
  } else if (shipType === 'cruiser') {
    selectedShip = { type: shipType, length: 3, direction: 'DOWN' };
  } else if (shipType === 'submarine') {
    selectedShip = { type: shipType, length: 3, direction: 'DOWN' };
  } else if (shipType === 'destroyer') {
    selectedShip = { type: shipType, length: 2, direction: 'DOWN' };
  } else {
    throw new Error('Invalid ship type attribute');
  }

  showDirection();
};

/**
 * Allows a player to remove a placed ship before game start.
 * @param {Event} e
 */
const handleShipRemove = (e) => {
  const shipType = e.currentTarget.getAttribute('data-ship');
  const matchingShip = playerShips.find((ship) => ship.type === shipType);
  if (!matchingShip) throw new Error('Unable to remove non-existant ship');

  // Remove ship from stored lists
  playerShips.splice(playerShips.indexOf(matchingShip), 1);
  playerBoard.removeShip(matchingShip.ref);
  selectedShip = null;

  // Swap event handlers
  e.currentTarget.removeEventListener('click', handleShipRemove);
  e.currentTarget.addEventListener('click', handleShipSelection);

  // Update views
  e.currentTarget.classList.remove('player-ships__ship_placed');
  e.currentTarget.classList.remove('player-ships__ship_undamaged');
  updateShipCounter();
  updatePlayerShipStatus();
  renderBoard(playerBoard, true);
};

// ============================================================================
//  Ship rotation functions
// ============================================================================

/**
 * Clears the currently highlighted direction during ship placement.
 */
const clearDirection = () => {
  // Clears previously highlighted direction
  const rotators = [...document.querySelectorAll('.ship-direction__rotator')];
  rotators.forEach((rotator) => {
    rotator.classList.remove('ship-direction__rotator_selected');
  });
};

/**
 * Highlights the currently selected ship direction during placement.
 */
const showDirection = () => {
  if (!selectedShip) return;

  // Show the ship direction controlls
  const shipDirection = document.querySelector('.ship-direction');
  shipDirection.classList.remove('hidden');
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
  rotator.classList.add('ship-direction__rotator_selected');
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

// ============================================================================
//  Game flow functions
// ============================================================================

/**
 * Starts the game.
 */
const startGame = () => {
  started = true;

  // Hides the start window
  const startWindow = document.querySelector('.start-window');
  startWindow.classList.add('hidden');

  // Unblurs the right gameboard
  const gameboardComputer = document.querySelector('.gameboard_computer');
  const computerShipStatus = document.querySelector('.computer-ships');
  gameboardComputer.classList.remove('gameboard_blurred');
  computerShipStatus.classList.remove('computer-ships_transparent');

  // Removes event listeners for ship selection and remove cursor pointer
  const shipElements = [...document.querySelectorAll('.player-ships__ship')];
  shipElements.forEach((shipElement) => {
    shipElement.style.setProperty('cursor', 'unset');
    shipElement.removeEventListener('click', handleShipRemove);
  });

  renderBoard(computerBoard, false);
  updateComputerShipStatus();
};

/**
 * Resets the game.
 */
const resetGame = () => {
  player = Player('Player');
  computer = Player();
  playerBoard = Gameboard();
  computerBoard = Gameboard();
  started = false;
  playerShips = [];
  computerShips = [];
  playerAttackCount = 0;
  computerAttackCount = 0;

  renderBoard(playerBoard, true);
  setupComputerBoard();
  renderBoard(computerBoard, false);
  updatePlayerShipStatus();
  updateComputerShipStatus();
  updateShipCounter();

  // Resets ship status window
  const playerShipElements = [...document.querySelectorAll('.player-ships__ship')];
  playerShipElements.forEach((shipElement) => {
    shipElement.style.setProperty('cursor', 'pointer');
    shipElement.addEventListener('click', handleShipSelection);
    shipElement.classList.remove('player-ships__ship_undamaged');
    shipElement.classList.remove('player-ships__ship_damaged');
    shipElement.classList.remove('player-ships__ship_sunk');
    shipElement.classList.remove('player-ships__ship_placed');
  });

  // Adds event handlers for ship selection and a pointer cursor to each ship selection element
  const computerShipElements = [...document.querySelectorAll('.computer-ships__ship')];
  computerShipElements.forEach((shipElement) => {
    shipElement.classList.remove('computer-ships__ship_undamaged');
    shipElement.classList.remove('computer-ships__ship_damaged');
    shipElement.classList.remove('computer-ships__ship_sunk');
  });

  // Hides the reset button
  const resetBtn = document.querySelector('.message-space__reset-btn');
  resetBtn.classList.add('hidden');

  // Shows the start window
  const startWindow = document.querySelector('.start-window');
  startWindow.classList.remove('hidden');

  // Blurs the right gameboard
  const gameboardComputer = document.querySelector('.gameboard_computer');
  const computerShipStatus = document.querySelector('.computer-ships');
  gameboardComputer.classList.add('gameboard_blurred');
  computerShipStatus.classList.add('computer-ships_transparent');

  // Resets status message
  const outcomeMsg = document.querySelector('.message-space__outcome-msg');
  const msg = document.querySelector('.message-space__msg');
  outcomeMsg.classList.add('hidden');
  msg.textContent = 'Click on your ships to place them in the grid.';
};

/**
 * Allows the game to end and prevents any more moves from being made.
 */
const endGame = (winner) => {
  // Removes player ability to continue attack
  const tiles = [...document.querySelectorAll('.gameboard_computer .gameboard__tile')];
  tiles.forEach((tile) => tile.removeEventListener('click', handlePlayerAttack));

  //
  const resetBtn = document.querySelector('.message-space__reset-btn');
  resetBtn.classList.remove('hidden');

  const outcomeMsg = document.querySelector('.message-space__outcome-msg');
  const msg = document.querySelector('.message-space__msg');
  outcomeMsg.classList.remove('hidden');

  if (winner.isHuman()) {
    outcomeMsg.textContent = 'You won!';
    msg.textContent = `You sunk all their ships in ${playerAttackCount} shots!`;
  } else {
    outcomeMsg.textContent = 'You lost!';
    msg.textContent = `They sunk all your ships in ${computerAttackCount} shots!`;
  }
};

/**
 * Allows the computer to make its turn against the player when the player's
 * turn is over.
 */
const endTurn = () => {
  computer.attack(playerBoard);
  computerAttackCount++;
  renderBoard(playerBoard, true);
  updatePlayerShipStatus();

  if (playerBoard.isDefeated()) {
    endGame(computer);
  }
};

/**
 * Checks if all ships are placed and starts the game if so. Otherwise, the
 * placed ships counter text is updated.
 */
const updateShipCounter = () => {
  const count = playerShips.length;
  const startBtn = document.querySelector('.start-dialog__btn');

  if (count === 5) {
    // Enables start button
    startBtn.removeAttribute('disabled');
  } else {
    startBtn.setAttribute('disabled', true);
  }

  // Updates the counter text
  const counterElement = document.querySelector('.start-dialog__ship-counter');
  counterElement.textContent = `${playerShips.length}/5 ships placed`;
};

/**
 * Randomly places the computer's ships on its board.
 */
const setupComputerBoard = () => {
  computerShips.push({
    type: 'carrier',
    ref: computerBoard.placeShipRandom(5),
  });
  computerShips.push({
    type: 'battleship',
    ref: computerBoard.placeShipRandom(4),
  });
  computerShips.push({
    type: 'cruiser',
    ref: computerBoard.placeShipRandom(3),
  });
  computerShips.push({
    type: 'submarine',
    ref: computerBoard.placeShipRandom(3),
  });
  computerShips.push({
    type: 'destroyer',
    ref: computerBoard.placeShipRandom(2),
  });
};

// ============================================================================
//  Test functions
// ============================================================================

/**
 * Allows two computers to play against each other.
 */
const testComputerFight = () => {
  const shipElements = [...document.querySelectorAll('.player-ships__ship')];
  shipElements.forEach((shipElement) => {
    shipElement.removeEventListener('click', handleShipSelection);
    shipElement.classList.add('player-ships__ship_placed');
  });

  playerShips.push({
    type: 'carrier',
    ref: playerBoard.placeShipRandom(5),
  });
  playerShips.push({
    type: 'battleship',
    ref: playerBoard.placeShipRandom(4),
  });
  playerShips.push({
    type: 'cruiser',
    ref: playerBoard.placeShipRandom(3),
  });
  playerShips.push({
    type: 'submarine',
    ref: playerBoard.placeShipRandom(3),
  });
  playerShips.push({
    type: 'destroyer',
    ref: playerBoard.placeShipRandom(2),
  });

  startGame();

  for (let i = 0; i < 99; i++) {
    if (playerBoard.isDefeated()) break;

    player.attack(computerBoard);
    playerAttackCount++;

    if (computerBoard.isDefeated()) {
      endGame(player);
      break;
    }

    endTurn();
  }

  renderBoard(computerBoard, false);
  updateComputerShipStatus();
};

// ============================================================================
//  Exported functions
// ============================================================================

/**
 * Initializes the start of the game.
 */
const initialize = () => {
  player = Player('Player');
  computer = Player();
  playerBoard = Gameboard();
  computerBoard = Gameboard();

  renderBoard(playerBoard, true);
  setupComputerBoard();
  renderBoard(computerBoard, false);

  // Registers event listener for ship selection list
  const shipElements = [...document.querySelectorAll('.player-ships__ship')];
  shipElements.forEach((shipElement) =>
    shipElement.addEventListener('click', handleShipSelection)
  );

  // Registers event listener for ship rotation buttons
  const rotators = [...document.querySelectorAll('.ship-direction__rotator')];
  rotators.forEach((rotator) => {
    rotator.addEventListener('click', handleRotation);
  });

  // Registers event listener for clearing any ship placement tile colors
  // when leaving the grid
  const grid = document.querySelector('.gameboard_player .gameboard__tile-grid');
  grid.addEventListener('mouseleave', resetTileColors);

  // Registers event listener for the start button
  const startButton = document.querySelector('.start-dialog__btn');
  startButton.addEventListener('click', startGame);

  // Registers event listener for reset button
  const resetButton = document.querySelector('.message-space__reset-btn');
  resetButton.addEventListener('click', resetGame);

  // TEST
  testComputerFight();
};

export default initialize;
