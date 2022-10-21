const Gameboard = require('../src/models/Gameboard');

describe('Gameboard', () => {
  const errLen = 'Invalid ship length';
  const errPos = 'Invalid ship position';
  const errOccupied = 'Ship cannot be placed on occupied tiles';

  test('Can place new ship on gameboard (up)', () => {
    const gameboard = Gameboard();
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
    const gameboard = Gameboard();
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
    const gameboard = Gameboard();
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
    const gameboard = Gameboard();
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
    const gameboard = Gameboard();
    expect(() =>
      gameboard.placeShip(5, { origin: 'A1', direction: 'DOWN' })
    ).not.toThrow();
    expect(() =>
      gameboard.placeShip(2, { origin: 'E1', direction: 'DOWN' })
    ).toThrow(errOccupied);
    expect(gameboard.getTile('F1').ship).toBe(null);
  });

  test('Throws when placing ship at invalid position', () => {
    const gameboard = Gameboard();
    expect(() => gameboard.placeShip(2, {})).toThrowError(errPos);
  });

  test('Throws when placing ship with invalid length', () => {
    const gameboard = Gameboard();
    expect(() =>
      gameboard.placeShip(0, { origin: 'A1', direction: 'DOWN' })
    ).toThrowError(errLen);
  });
});
