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

  let firstHit = null;

  /**
   * Adds the next attacks that the computer should make if the tileStr represents a hit.
   * @param {string} tileStr String that represents a tile (e.g. 'A1').
   * @param {Object} gameboard Gameboard object.
   * @param {string} [dir] Direction to limit attacks to.
   */
  const setNextAttacks = (tileStr, gameboard, dir = null) => {
    let orientation = null;
    if (dir === 'UP' || dir === 'DOWN') {
      orientation = 'VERTICAL';
    } else if (dir === 'LEFT' || dir === 'RIGHT') {
      orientation = 'HORIZONTAL';
    } else if (dir) {
      throw new Error(PlayerErrors.invalidDirection);
    }

    const { row, col } = toGridCoord(tileStr);
    nextAttacks.splice(0);

    if (!orientation || orientation === 'VERTICAL') {
      // Checks up
      let tile = gameboard.getTile(toTileStr(row - 1, col));
      if (tile && tile.status === 0) {
        nextAttacks.push(toTileStr(row - 1, col));
      }

      // Checks down
      tile = gameboard.getTile(toTileStr(row + 1, col));
      if (tile && tile.status === 0) {
        nextAttacks.push(toTileStr(row + 1, col));
      }
    }

    if (!orientation || orientation === 'HORIZONTAL') {
      // Checks to the right
      let tile = gameboard.getTile(toTileStr(row, col + 1));
      if (tile && tile.status === 0) {
        nextAttacks.push(toTileStr(row, col + 1));
      }

      // Checks to the left
      tile = gameboard.getTile(toTileStr(row, col - 1));
      if (tile && tile.status === 0) {
        nextAttacks.push(toTileStr(row, col - 1));
      }
    }
  };

  /**
   * Eliminates valid moves from the moves array. Used for when a ship is sunk to allow the
   * computer to make better choices.
   * @param {Object} ship Ship object.
   * @param {Object} gameboard Gameboard object.
   */
  const deleteMovesNearShip = (ship, gameboard) => {
    const shipLength = ship.getLength();
    const shipDirection = ship.getPosition().direction;
    const shipOrigin = ship.getPosition().origin;

    let { row, col } = toGridCoord(shipOrigin);
    for (let i = 0; i < shipLength; i++) {
      for (let r = row - 1; r <= row + 1; r++) {
        for (let c = col - 1; c <= col + 1; c++) {
          const tile = gameboard.getTile(toTileStr(r, c));
          if (tile) {
            const movesIndex = moves.indexOf(toTileStr(r, c));
            if (movesIndex >= 0) {
              moves.splice(movesIndex, 1);
            }
          }
        }
      }

      if (shipDirection === 'UP') {
        row--;
      } else if (shipDirection === 'RIGHT') {
        col++;
      } else if (shipDirection === 'DOWN') {
        row++;
      } else if (shipDirection === 'LEFT') {
        col--;
      }
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
      if (attackedTile.status === 2 && !attackedTile.ship.isSunk()) {
        // Attack was a hit, updating next attacks based on ship direction
        setNextAttacks(nextTileStr, gameboard, attackedTile.ship.getPosition().direction);

        if (nextAttacks.length === 0 && !gameboard.getTile(firstHit).ship.isSunk()) {
          // End of ship reached and no next attacks available, attacking in other direction
          setNextAttacks(
            firstHit,
            gameboard,
            gameboard.getTile(firstHit).ship.getPosition().direction
          );
        }
      } else if (attackedTile.status === 2 && attackedTile.ship.isSunk()) {
        // Ship was sunk, clears next attacks to allow random attacks on tiles again
        firstHit = null;
        nextAttacks.splice(0);
        deleteMovesNearShip(attackedTile.ship, gameboard);
      } else if (nextAttacks.length === 0 && !gameboard.getTile(firstHit).ship.isSunk()) {
        // Last attack missed and no next attacks available, attacking in other direction
        setNextAttacks(
          firstHit,
          gameboard,
          gameboard.getTile(firstHit).ship.getPosition().direction
        );
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
      firstHit = randomTile;
      setNextAttacks(randomTile, gameboard);
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
