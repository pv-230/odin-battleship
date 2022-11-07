const { toGridCoord, toTileStr } = require('../utility/stringConversion');

/**
 * Represents a player. If no name is given, a computer player will be set up.
 * @param {string} n Player name. If empty, player becomes a computer.
 * @returns The Player interface.
 */
const Player = (n) => {
  const name = n || 'Computer';

  // Populates valid moves for the player
  const moves = [];
  for (let char = 65; char <= 74; char++) {
    for (let num = 1; num <= 10; num++) {
      moves.push(String.fromCharCode(char).concat(num.toString()));
    }
  }

  // Contains the next attacks a computer player should make based on tiles that hit
  const nextAttacks = [];

  /**
   * @returns The player's name.
   */
  const getName = () => name;

  /**
   * @returns True if the player object represents a human player.
   */
  const isHuman = () => !!n;

  /**
   * Allows a player to attack a gameboard at a specific tile or at a random
   * tile.
   * @param {object} gameboard The gameboard to attack.
   * @param {string} tile The tile to attack (e.g. 'A1').
   * @returns The tile that was successfully attack or null otherwise.
   */
  const attack = (gameboard, tile = null) => {
    // Player attacks a specific tile
    if (tile) return gameboard.receiveAttack(tile) ? tile : null;

    // Computer player attacks random tile
    if (moves.length === 0) throw new Error('No valid moves remaining');
    const randomIndex = Math.floor(Math.random() * moves.length);
    const randomTile = moves.at(randomIndex);
    if (gameboard.receiveAttack(randomTile)) {
      if (gameboard.getTile(randomTile).status === 2) {
        setNextAttacks(randomTile, gameboard);
      }
      moves.splice(randomIndex, 1);
      return randomTile;
    }

    return null;
  };

  /**
   * Adds the next attacks that the computer should make if the tileStr represents a hit.
   * @param {string} tileStr String that represents a tile (e.g. 'A1').
   * @param {Object} gameboard Gameboard object.
   */
  const setNextAttacks = (tileStr, gameboard) => {
    const { row, col } = toGridCoord(tileStr);
    nextAttacks.splice(0);

    // Checks up
    if (gameboard.getTile(toTileStr(row - 1, col))) {
      nextAttacks.push(toTileStr(row - 1, col));
    }

    // Checks to the right
    if (gameboard.getTile(toTileStr(row, col + 1))) {
      nextAttacks.push(toTileStr(row, col + 1));
    }

    // Checks down
    if (gameboard.getTile(toTileStr(row + 1, col))) {
      nextAttacks.push(toTileStr(row + 1, col));
    }

    // Checks to the left
    if (gameboard.getTile(toTileStr(row, col - 1))) {
      nextAttacks.push(toTileStr(row, col - 1));
    }
    console.log(`Hit on ${tileStr}`);
    console.log(nextAttacks);
  };

  return {
    getName,
    isHuman,
    attack,
  };
};

module.exports = Player;
