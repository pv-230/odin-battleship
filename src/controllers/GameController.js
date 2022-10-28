// Model imports
import Player from '../models/Player';
import Gameboard from '../models/Gameboard';

// Component imports
import '../views/content/content';
import * as GameboardDOM from '../views/gameboard/gameboard';

// Controller variables
let player = null;
let computer = null;
let playerBoard = null;
let computerBoard = null;

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

  GameboardDOM.renderBoard(playerBoard, true);
  GameboardDOM.renderBoard(computerBoard, false);
  GameboardDOM.addAttackHandlers(player, computerBoard);
};

/**
 * Allows the computer to make its turn against the player when the player's
 * turn is over.
 */
const endTurn = () => {
  if (computerBoard.isDefeated()) {
    console.log(`${player.getName()} wins!`);
    return;
  }

  computer.attack(playerBoard);
  GameboardDOM.renderBoard(playerBoard, true);

  if (playerBoard.isDefeated()) {
    console.log(`${computer.getName()} wins!`);
    return;
  }
};

export { initialize, endTurn };
