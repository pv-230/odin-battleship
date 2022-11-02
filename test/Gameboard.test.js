const Gameboard = require('../src/models/Gameboard');
const { GameboardErrors, ShipErrors } = require('../src/errors');

describe('Gameboard', () => {
  let gameboard;
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
    ).toThrow(GameboardErrors.proximity);
    expect(gameboard.getTile('F1').ship).toBe(null);
  });

  test('Throws when placing ship at invalid position', () => {
    expect(() => gameboard.placeShip(2, {})).toThrowError(
      ShipErrors.invalidShipPosition
    );
  });

  test('Throws when placing ship with invalid length', () => {
    expect(() =>
      gameboard.placeShip(0, { origin: 'A1', direction: 'DOWN' })
    ).toThrowError(ShipErrors.invalidShipLength);
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
      GameboardErrors.invalidTileStr
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
    gameboard.placeShip(2, { origin: 'A3', direction: 'DOWN' });
    gameboard.receiveAttack('A3');
    gameboard.receiveAttack('B3');
    expect(gameboard.getTile('A3').ship.isSunk()).toBe(true);
    expect(gameboard.isDefeated()).toBe(false);
  });

  test('Is defeated with all ships sunk', () => {
    gameboard.placeShip(2, { origin: 'A1', direction: 'DOWN' });
    gameboard.placeShip(2, { origin: 'A3', direction: 'DOWN' });
    gameboard.receiveAttack('A1');
    gameboard.receiveAttack('B1');
    gameboard.receiveAttack('A3');
    gameboard.receiveAttack('B3');
    expect(gameboard.isDefeated()).toBe(true);
  });

  test('Cannot attack same tile twice', () => {
    gameboard.placeShip(2, { origin: 'A1', direction: 'DOWN' });
    expect(gameboard.receiveAttack('A1')).toBe(true);
    expect(gameboard.receiveAttack('A1')).toBe(false);
    expect(gameboard.getTile('A1').ship.getHits()).toBe(1);
  });

  test('Placing ship returns reference to new ship', () => {
    const ship = gameboard.placeShip(2, { origin: 'A1', direction: 'DOWN' });
    expect(ship.getLength()).toBe(2);
    expect(ship.getPosition()).toMatchObject({
      origin: 'A1',
      direction: 'DOWN',
    });
    expect(gameboard.getTile('A1').ship).toBe(ship);
  });

  test('Grid does not save ships that fail to place', () => {
    gameboard.placeShip(2, { origin: 'A1', direction: 'DOWN' });
    expect(() =>
      gameboard.placeShip(2, { origin: 'A2', direction: 'LEFT' })
    ).toThrowError('Ship cannot be placed too close to others');
    expect(gameboard.getTile('A2').ship).toBe(null);
  });

  test('Unable to place ships adjacent to each other', () => {
    gameboard.placeShip(2, { origin: 'D5', direction: 'DOWN' });
    expect(() =>
      gameboard.placeShip(2, { origin: 'F4', direction: 'DOWN' })
    ).toThrow(GameboardErrors.proximity);
    expect(() =>
      gameboard.placeShip(2, { origin: 'F5', direction: 'DOWN' })
    ).toThrow(GameboardErrors.proximity);
    expect(() =>
      gameboard.placeShip(2, { origin: 'F6', direction: 'DOWN' })
    ).toThrow(GameboardErrors.proximity);
    expect(() =>
      gameboard.placeShip(2, { origin: 'E4', direction: 'LEFT' })
    ).toThrow(GameboardErrors.proximity);
    expect(() =>
      gameboard.placeShip(2, { origin: 'E6', direction: 'RIGHT' })
    ).toThrow(GameboardErrors.proximity);
    expect(() =>
      gameboard.placeShip(2, { origin: 'D4', direction: 'LEFT' })
    ).toThrow(GameboardErrors.proximity);
    expect(() =>
      gameboard.placeShip(2, { origin: 'D6', direction: 'RIGHT' })
    ).toThrow(GameboardErrors.proximity);
    expect(() =>
      gameboard.placeShip(2, { origin: 'C4', direction: 'UP' })
    ).toThrow(GameboardErrors.proximity);
    expect(() =>
      gameboard.placeShip(2, { origin: 'C5', direction: 'UP' })
    ).toThrow(GameboardErrors.proximity);
    expect(() =>
      gameboard.placeShip(2, { origin: 'C6', direction: 'UP' })
    ).toThrow(GameboardErrors.proximity);
  });

  test('Can remove ships from the gameboard', () => {
    const ship = gameboard.placeShip(2, { origin: 'A1', direction: 'DOWN' });
    gameboard.removeShip(ship);
    expect(gameboard.getTile('A1').ship).toBe(null);
    expect(gameboard.getTile('B2').ship).toBe(null);
  });

  test('Can randomize ship placement', () => {
    const carrier = gameboard.placeShipRandom(5);
    const battleship = gameboard.placeShipRandom(4);
    const crusier = gameboard.placeShipRandom(3);
    const submarine = gameboard.placeShipRandom(3);
    const destroyer = gameboard.placeShipRandom(2);
    expect(gameboard.getShipCount()).toBe(5);
    expect(carrier.getPosition()).not.toBeFalsy();
    expect(battleship.getPosition()).not.toBeFalsy();
    expect(crusier.getPosition()).not.toBeFalsy();
    expect(submarine.getPosition()).not.toBeFalsy();
    expect(destroyer.getPosition()).not.toBeFalsy();
  });
});
