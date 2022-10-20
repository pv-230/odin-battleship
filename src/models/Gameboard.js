const Ship = require('./Ship');

const Gameboard = () => {
  // Creates the grid
  const grid = {};
  for (let code = 65; code < 75; code++) {
    grid[String.fromCharCode(code)] = [...new Array(10)].map(() => ({
      ship: null,
      missed: false,
    }));
  }

  /**
   * Places a new ship on the gameboard.
   * @param {number} len
   * @param {object} pos
   * @returns true if successful, false otherwise.
   */
  const placeShip = (len, pos) => {
    try {
      const ship = Ship(len, pos);
      const shipOrigin = ship.getPosition().origin;
      const originLetter = shipOrigin.slice(0, 1);
      const originNum = parseInt(shipOrigin.slice(1), 10);
      const shipDirection = ship.getPosition().direction;

      if (shipDirection === 'UP') {
        let code = originLetter.charCodeAt(0);
        for (let i = 0; i < len; i++) {
          grid[String.fromCharCode(code)][originNum] = {
            ship,
            missed: false,
          };
          // ASCII code is decremented to move up rows
          code--;
        }
      }

      if (shipDirection === 'DOWN') {
        let code = originLetter.charCodeAt(0);
        for (let i = 0; i < len; i++) {
          grid[String.fromCharCode(code)][originNum] = {
            ship,
            missed: false,
          };
          // ASCII code is incremented to move down rows
          code++;
        }
      }
    } catch (err) {
      return false;
    }

    return true;
  };

  /**
   * @param {string} tile A tile on the grid (e.g. 'A1').
   * @returns Object containing tile properties.
   */
  const getTile = (tile) => {
    const letter = tile.slice(0, 1);
    const num = parseInt(tile.slice(1), 10);
    return grid[letter][num];
  };

  return {
    placeShip,
    getTile,
  };
};

module.exports = Gameboard;
