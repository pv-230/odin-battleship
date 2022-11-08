const { toGridCoord, toTileStr } = require('../utility/stringConversion');
const { PlayerErrors } = require('../utility/errors');

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
   * Adds the next attacks that the computer should make if the tileStr represents a hit.
   * @param {string} tileStr String that represents a tile (e.g. 'A1').
   * @param {Object} gameboard Gameboard object.
   */
  const setNextAttacks = (tileStr, gameboard) => {
    const { row, col } = toGridCoord(tileStr);
    nextAttacks.splice(0);

    // Checks up
    let tile = gameboard.getTile(toTileStr(row - 1, col));
    if (tile && tile.status === 0) {
      nextAttacks.push(toTileStr(row - 1, col));
    }

    // Checks to the right
    tile = gameboard.getTile(toTileStr(row, col + 1));
    if (tile && tile.status === 0) {
      nextAttacks.push(toTileStr(row, col + 1));
    }

    // Checks down
    tile = gameboard.getTile(toTileStr(row + 1, col));
    if (tile && tile.status === 0) {
      nextAttacks.push(toTileStr(row + 1, col));
    }

    // Checks to the left
    tile = gameboard.getTile(toTileStr(row, col - 1));
    if (tile && tile.status === 0) {
      nextAttacks.push(toTileStr(row, col - 1));
    }
  };

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
   * @param {string} [tileStr] The tile to attack (e.g. 'A1'). If omitted, a random attack is made.
   * @returns The tile that was attacked.
   */
  const attack = (gameboard, tileStr = null) => {
    // Player attacks a specific tile
    if (tileStr) return gameboard.receiveAttack(tileStr) ? tileStr : null;

    // Checks if computer can make additional moves
    if (moves.length === 0) throw new Error(PlayerErrors.noValidMoves);

    // Computer player chooses an attack from the nextAttacks array if not empty
    if (nextAttacks.length > 0) {
      const randomIndex = Math.floor(Math.random() * nextAttacks.length);
      const nextTileStr = nextAttacks[randomIndex];
      if (!gameboard.receiveAttack(nextTileStr)) throw new Error(PlayerErrors.compAttackFailed);

      // Removes the attacked tile from future options
      moves.splice(moves.indexOf(nextTileStr), 1);
      nextAttacks.splice(randomIndex, 1);

      const attackedTile = gameboard.getTile(nextTileStr);
      if (attackedTile.status === 2 && attackedTile.ship && !attackedTile.ship.isSunk()) {
        setNextAttacks(nextTileStr, gameboard);
        console.log(`Targeted hit on ${nextTileStr}`);
        console.log(`Next attacks is now: ${nextAttacks}`);
      } else if (attackedTile.ship && attackedTile.ship.isSunk()) {
        nextAttacks.splice(0);
        console.log('Ship sunk');
        console.log(`Next attacks is now: ${nextAttacks}`);
      }

      return nextTileStr;
    }

    // Computer player attacks random tile
    const randomIndex = Math.floor(Math.random() * moves.length);
    const randomTile = moves.at(randomIndex);
    if (!gameboard.receiveAttack(randomTile)) throw new Error(PlayerErrors.compAttackFailed);

    // Checks if computer hit a ship
    if (gameboard.getTile(randomTile).status === 2) {
      // Allows computer to choose tiles near damaged ship
      setNextAttacks(randomTile, gameboard);
      console.log(`Random hit on ${randomTile}`);
      console.log(`Next attacks: ${nextAttacks}`);
    }

    moves.splice(randomIndex, 1);
    return randomTile;
  };

  return {
    getName,
    isHuman,
    attack,
  };
};

module.exports = Player;
