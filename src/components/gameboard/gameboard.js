import './gameboard.css';

// Generates the left gameboard
const gameboardLeft = document.querySelector('.gameboard_left');
let charCode = 65;
for (; charCode <= 74; charCode++) {
  for (let col = 1; col <= 10; col++) {
    const tile = document.createElement('div');
    tile.classList.add('gameboard__tile');
    tile.setAttribute('data-tile', `${String.fromCharCode(charCode)}${col}`);
    gameboardLeft.appendChild(tile);
  }
}

// Generates the right gameboard
const gameboardRight = document.querySelector('.gameboard_right');
charCode = 65;
for (; charCode <= 74; charCode++) {
  for (let col = 1; col <= 10; col++) {
    const tile = document.createElement('div');
    tile.classList.add('gameboard__tile');
    tile.setAttribute('data-tile', `${String.fromCharCode(charCode)}${col}`);
    gameboardRight.appendChild(tile);
  }
}
