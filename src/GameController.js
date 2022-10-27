import Player from './models/Player';
import Gameboard from './models/Gameboard';
import { displayBoard } from './components/gameboard/gameboard';

const player = Player('Bob');
const computer = Player();
const playerBoard = Gameboard();
const computerBoard = Gameboard();

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

displayBoard(playerBoard, player);
displayBoard(computerBoard, computer);
