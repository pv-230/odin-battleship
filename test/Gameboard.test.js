const Gameboard = require('../src/models/Gameboard');

const errLen = 'Invalid ship length';
const errPos = 'Invalid ship position';
const errOccupied = 'Ship cannot be placed on occupied tiles';
let gameboard;

describe('Gameboard', () => {
  beforeEach(() => {
    gameboard = Gameboard();
  });

  test('Can place new ship on gameboard (up)', () => {
    gameboard.placeShip(2, { origin: 'F1', direction: 'UP' });
    expect(gameboard.getTile('F1').ship.getPosition()).toHaveProperty(
      'origin',
      'F1'
    );
    expect(gameboard.getTile('E1').ship.getPosition()).toHaveProperty(
      'origin',
      'F1'
    );
    expect(gameboard.getTile('D1').ship).toBe(null);
  });

  test('Can place new ship on gameboard (down)', () => {
    gameboard.placeShip(2, { origin: 'A1', direction: 'DOWN' });
    expect(gameboard.getTile('A1').ship.getPosition()).toHaveProperty(
      'origin',
      'A1'
    );
    expect(gameboard.getTile('B1').ship.getPosition()).toHaveProperty(
      'origin',
      'A1'
    );
    expect(gameboard.getTile('C1').ship).toBe(null);
  });

  test('Can place new ship on gameboard (left)', () => {
    gameboard.placeShip(2, { origin: 'A6', direction: 'LEFT' });
    expect(gameboard.getTile('A6').ship.getPosition()).toHaveProperty(
      'origin',
      'A6'
    );
    expect(gameboard.getTile('A5').ship.getPosition()).toHaveProperty(
      'origin',
      'A6'
    );
    expect(gameboard.getTile('A4').ship).toBe(null);
  });

  test('Can place new ship on gameboard (right)', () => {
    gameboard.placeShip(2, { origin: 'A1', direction: 'RIGHT' });
    expect(gameboard.getTile('A1').ship.getPosition()).toHaveProperty(
      'origin',
      'A1'
    );
    expect(gameboard.getTile('A2').ship.getPosition()).toHaveProperty(
      'origin',
      'A1'
    );
    expect(gameboard.getTile('A3').ship).toBe(null);
  });

  test('Cannot place ship on occupied tiles', () => {
    expect(() =>
      gameboard.placeShip(5, { origin: 'A1', direction: 'DOWN' })
    ).not.toThrow();
    expect(() =>
      gameboard.placeShip(2, { origin: 'E1', direction: 'DOWN' })
    ).toThrow(errOccupied);
    expect(gameboard.getTile('F1').ship).toBe(null);
  });

  test('Throws when placing ship at invalid position', () => {
    expect(() => gameboard.placeShip(2, {})).toThrowError(errPos);
  });

  test('Throws when placing ship with invalid length', () => {
    expect(() =>
      gameboard.placeShip(0, { origin: 'A1', direction: 'DOWN' })
    ).toThrowError(errLen);
  });

  test('Attacks can miss', () => {
    expect(gameboard.getTile('A1').status).toBe(0);
    expect(gameboard.receiveAttack('A1')).toBe(true);
    expect(gameboard.getTile('A1').status).toBe(1);
  });

  test('Attacks can hit', () => {
    gameboard.placeShip(2, { origin: 'A1', direction: 'DOWN' });
    expect(gameboard.receiveAttack('B1')).toBe(true);
    expect(gameboard.getTile('B1').ship.getHits()).toBe(1);
    expect(gameboard.getTile('B1').status).toBe(2);
  });

  test('Attacks can sink', () => {
    gameboard.placeShip(2, { origin: 'A1', direction: 'DOWN' });
    expect(gameboard.receiveAttack('A1')).toBe(true);
    expect(gameboard.getTile('A1').status).toBe(2);
    expect(gameboard.receiveAttack('B1')).toBe(true);
    expect(gameboard.getTile('B1').status).toBe(2);
    expect(gameboard.getTile('A1').ship.getHits()).toBe(2);
    expect(gameboard.getTile('A1').ship.isSunk()).toBe(true);
  });

  test('Throw if receiving attack to invalid tile', () => {
    expect(() => gameboard.receiveAttack('Z11')).toThrowError(
      'Invalid tile coordinates'
    );
  });

  test('Not defeated with empty board', () => {
    expect(gameboard.isDefeated()).toBe(false);
  });

  test('Not defeated with one undamaged ship', () => {
    gameboard.placeShip(2, { origin: 'A1', direction: 'DOWN' });
    expect(gameboard.isDefeated()).toBe(false);
  });

  test('Not defeated with one sunk ship and one undamaged ship', () => {
    gameboard.placeShip(2, { origin: 'A1', direction: 'DOWN' });
    gameboard.placeShip(2, { origin: 'A2', direction: 'DOWN' });
    gameboard.receiveAttack('A2');
    gameboard.receiveAttack('B2');
    expect(gameboard.getTile('A2').ship.isSunk()).toBe(true);
    expect(gameboard.isDefeated()).toBe(false);
  });

  test('Is defeated with all ships sunk', () => {
    gameboard.placeShip(2, { origin: 'A1', direction: 'DOWN' });
    gameboard.placeShip(2, { origin: 'A2', direction: 'DOWN' });
    gameboard.receiveAttack('A1');
    gameboard.receiveAttack('B1');
    gameboard.receiveAttack('A2');
    gameboard.receiveAttack('B2');
    expect(gameboard.isDefeated()).toBe(true);
  });

  test('Cannot attack same tile twice', () => {
    gameboard.placeShip(2, { origin: 'A1', direction: 'DOWN' });
    expect(gameboard.receiveAttack('A1')).toBe(true);
    expect(gameboard.receiveAttack('A1')).toBe(false);
    expect(gameboard.getTile('A1').ship.getHits()).toBe(1);
  });
});
