const Player = require('../src/models/Player');
const Gameboard = require('../src/models/Gameboard');
const PlayerErrors = require('../src/utility/errors');

describe('Player', () => {
  test('Can get human player name', () => {
    expect(Player('Bob').getName()).toBe('Bob');
  });

  test('Can get computer player name', () => {
    expect(Player().getName()).toBe('Computer');
  });

  test('Player can attack specific tile', () => {
    const gameboard = Gameboard();
    const player = Player();
    expect(player.attack(gameboard, 'A1')).toBe('A1');
    expect(gameboard.getTile('A1').status).toBe(1);
  });

  test('Player cannot attack same tile twice', () => {
    const gameboard = Gameboard();
    const player = Player();
    expect(player.attack(gameboard, 'A1')).toBe('A1');
    expect(player.attack(gameboard, 'A1')).toBe(null);
    expect(gameboard.getTile('A1').status).toBe(1);
  });

  test('Player can attack random tile', () => {
    const gameboard = Gameboard();
    const player = Player();
    const attackedTile = player.attack(gameboard);
    expect(gameboard.getTile(attackedTile).status).toBe(1);
  });

  test('Player can make 100 random attacks', () => {
    const gameboard = Gameboard();
    const player = Player();
    for (let i = 0; i < 100; i++) {
      expect(() => player.attack(gameboard)).not.toThrow();
    }
    expect(() => player.attack(gameboard)).toThrow(PlayerErrors.noValidMoves);
  });
});
