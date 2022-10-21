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
    expect(gameboard.getTile('A1').missed).toBe(false);
    expect(() => gameboard.receiveAttack('A1')).not.toThrow();
    expect(gameboard.getTile('A1').missed).toBe(true);
  });

  test('Attacks can hit', () => {
    expect(() =>
      gameboard.placeShip(2, { origin: 'A1', direction: 'DOWN' })
    ).not.toThrow();
    gameboard.receiveAttack('B1');
    expect(gameboard.getTile('B1').ship.getHits()).toBe(1);
  });

  test('Attacks can sink', () => {
    expect(() =>
      gameboard.placeShip(2, { origin: 'A1', direction: 'DOWN' })
    ).not.toThrow();
    gameboard.receiveAttack('A1');
    gameboard.receiveAttack('B1');
    expect(gameboard.getTile('A1').ship.getHits()).toBe(2);
    expect(gameboard.getTile('A1').ship.isSunk()).toBe(true);
  });

  test('Throw if receiving attack to invalid tile', () => {
    expect(() => gameboard.receiveAttack('Z11')).toThrowError(
      'Invalid tile coordinates'
    );
  });
});
