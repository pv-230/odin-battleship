const cloneDeep = require('lodash.clonedeep');
const Ship = require('./Ship');
const { GameboardErrors, ShipErrors } = require('../errors');

/**
 * Helper function to convert a tile string to array indexes for the grid.
 * @param {string} tileStr Represents a tile (e.g. 'A1').
 * @returns Object with 'row' and 'col' properties.
 */
const toGridCoord = (tileStr) => {
  // Convert row substring to uppercase ASCII code and subtract 65
  const row = tileStr.slice(0, 1).toUpperCase().charCodeAt(0) - 65;
  const col = parseInt(tileStr.slice(1), 10) - 1;
  return { row, col };
};

/**
 * Gameboard factory function.
 * @returns An interface for the gameboard.
 */
const Gameboard = () => {
  // Creates a 2D grid of tiles and their associated properties
  // Origin point is located in the top left at row 0 and column 0.
  let grid = [...new Array(10)].map(() =>
    [...new Array(10)].map(() => ({ ship: null, status: 0 }))
  );

  // Contains ships that are present on the board
  const ships = [];

  /**
   * Checks the grid coordinate and adjacent points for existing ships.
   * @param {number} row Grid row number
   * @param {number} col Col row number
   * @returns true if an existing ship is in proximity, false otherwise
   */
  const checkProximity = (row, col) => {
    /*
    For a given grid point, all adjacent points are checked for existing
    ships. The order of checked points starts with the top adjacent points
    left to right. Followed by middle adjacent points left to right.
    Finally, the bottom adjacent points are checked left to right. Checks
    for undefined are made so no errors are encountered if the initial grid
    point is on the grid edge.
    */
    for (let r = row - 1; r <= row + 1; r++) {
      if (grid[r]) {
        for (let c = col - 1; c <= col + 1; c++) {
          if (grid[r][c]) {
            if (grid[r][c].ship) return true;
          }
        }
      }
    }

    return false;
  };

  /**
   * Places a new ship on the gameboard.
   * @param {number} len Length of the ship to place.
   * @param {object} pos Position of the ship.
   */
  const placeShip = (len, pos) => {
    const ship = Ship(len, pos);
    const shipDirection = ship.getPosition().direction;
    const gridCopy = cloneDeep(grid);
    const gridCoord = toGridCoord(ship.getPosition().origin);

    if (shipDirection === 'UP') {
      let { row, col } = gridCoord; // eslint-disable-line prefer-const
      for (let i = len; i > 0; i--) {
        if (checkProximity(row, col))
          throw new Error(GameboardErrors.proximity);
        gridCopy[row][col].ship = ship;
        row--;
      }
    } else if (shipDirection === 'DOWN') {
      let { row, col } = gridCoord; // eslint-disable-line prefer-const
      for (let i = len; i > 0; i--) {
        if (checkProximity(row, col))
          throw new Error(GameboardErrors.proximity);
        gridCopy[row][col].ship = ship;
        row++;
      }
    } else if (shipDirection === 'LEFT') {
      let { row, col } = gridCoord; // eslint-disable-line prefer-const
      for (let i = len; i > 0; i--) {
        if (checkProximity(row, col))
          throw new Error(GameboardErrors.proximity);
        gridCopy[row][col].ship = ship;
        col--;
      }
    } else if (shipDirection === 'RIGHT') {
      let { row, col } = gridCoord; // eslint-disable-line prefer-const
      for (let i = len; i > 0; i--) {
        if (checkProximity(row, col))
          throw new Error(GameboardErrors.proximity);
        gridCopy[row][col].ship = ship;
        col++;
      }
    } else {
      throw new Error('Cannot place ship: Ship direction invalid');
    }

    ships.push(ship);
    grid = gridCopy;
    return ship;
  };

  const placeShipRandom = (len) => {
    if (!len) throw new Error(GameboardErrors.missingLengthArg);
    if (ships.length === 5) throw new Error(GameboardErrors.maxShipCount);

    const directions = ['UP', 'RIGHT', 'DOWN', 'LEFT'];
    let ship = null;

    while (!ship) {
      // Random tile
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 10);
      const origin = String.fromCharCode(65 + row).concat(`${col + 1}`);

      // Random direction
      let dir = Math.floor(Math.random() * 4);
      let direction = directions[dir];

      // Attempts to place ship at random tile in random direction. If
      // placement fails, the next direction is attempted. If all directions
      // fail, a new random tile will be chosen.
      for (let i = 0; i < 4; i++) {
        try {
          ship = placeShip(len, { origin, direction });
          break;
        } catch (err) {
          if (
            err.message === GameboardErrors.proximity ||
            err.message === ShipErrors.invalidShipPosition
          ) {
            // Attempts next direction
            direction = directions[++dir % 4];
          } else {
            console.error(err);
          }
        }
      }
    }

    return ship;
  };

  /**
   * @param {string} tile A tile on the grid (e.g. 'A1').
   * @returns Object containing tile properties.
   */
  const getTile = (tileStr) => {
    const { row, col } = toGridCoord(tileStr);
    return grid[row][col];
  };

  /**
   * Allows a board to register a hit or miss for a tile.
   * @param {string} tileStr Represents the tile to attack.
   * @returns true if successful or false if tile has already been attacked.
   */
  const receiveAttack = (tileStr) => {
    let tile;

    try {
      const { row, col } = toGridCoord(tileStr);
      tile = grid[row][col];
    } catch {
      throw new Error(GameboardErrors.invalidTileStr);
    }

    // Tile has already been attacked
    if (tile.status !== 0) return false;

    // Hits a ship if it occupies the tile, otherwise tile is marked as missed
    if (tile.ship) {
      tile.ship.hit();
      tile.status = 2;
    } else {
      tile.status = 1;
    }

    return true;
  };

  /**
   * @returns true if no unsunk ships remain, false otherwise.
   */
  const isDefeated = () => {
    if (ships.length === 0) return false;

    // Checks if there are any unsunk ships remaining
    if (ships.filter((ship) => !ship.isSunk()).length > 0) return false;

    return true;
  };

  /**
   * @returns Number of ships on the gameboard.
   */
  const getShipCount = () => ships.length;

  /**
   * Removes the specified ship from the gameboard.
   * @param {object} ship Ship object.
   */
  const removeShip = (ship) => {
    if (!ship) return;

    const gridCoord = toGridCoord(ship.getPosition().origin);
    const shipDirection = ship.getPosition().direction;
    const shipLength = ship.getLength();

    if (shipDirection === 'UP') {
      let { row, col } = gridCoord; // eslint-disable-line prefer-const
      for (let i = shipLength; i > 0; i--) {
        grid[row][col].ship = null;
        row--;
      }
    } else if (shipDirection === 'DOWN') {
      let { row, col } = gridCoord; // eslint-disable-line prefer-const
      for (let i = shipLength; i > 0; i--) {
        grid[row][col].ship = null;
        row++;
      }
    } else if (shipDirection === 'LEFT') {
      let { row, col } = gridCoord; // eslint-disable-line prefer-const
      for (let i = shipLength; i > 0; i--) {
        grid[row][col].ship = null;
        col--;
      }
    } else if (shipDirection === 'RIGHT') {
      let { row, col } = gridCoord; // eslint-disable-line prefer-const
      for (let i = shipLength; i > 0; i--) {
        grid[row][col].ship = null;
        col++;
      }
    }

    ships.splice(ships.indexOf(ship), 1);
  };

  return {
    placeShip,
    getTile,
    receiveAttack,
    isDefeated,
    getShipCount,
    removeShip,
    placeShipRandom,
  };
};

module.exports = Gameboard;
