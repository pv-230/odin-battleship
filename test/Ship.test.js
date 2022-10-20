const Ship = require('../src/models/Ship');

describe('Ship', () => {
  const errLen = 'Invalid ship length';
  const errPos = 'Invalid ship position';
  const defaultPos = {
    origin: 'A1',
    direction: 'DOWN',
  };

  test('Throw if length argument is missing or invalid', () => {
    expect(() => Ship()).toThrow();
    expect(() => Ship(1.5, defaultPos)).toThrow(errLen);
    expect(() => Ship('1', defaultPos)).toThrow(errLen);
    expect(() => Ship(1, defaultPos)).toThrow(errLen);
    expect(() => Ship(6, defaultPos)).toThrow(errLen);
  });

  test('Throw if missing position arg or position properties', () => {
    expect(() => Ship(5)).toThrow(errPos);
    expect(() => Ship(5, {})).toThrow(errPos);
    expect(() => Ship(5, { origin: 'A1' })).toThrow(errPos);
    expect(() => Ship(5, { direction: 'DOWN' })).toThrow(errPos);
  });

  test('Throw if invalid position origin', () => {
    expect(() => Ship(5, { origin: 42, direction: 'DOWN' })).toThrow(errPos);
    expect(() => Ship(5, { origin: '', direction: 'DOWN' })).toThrow(errPos);
    expect(() => Ship(5, { origin: 'A0', direction: 'DOWN' })).toThrow(errPos);
    expect(() => Ship(5, { origin: 'A11', direction: 'DOWN' })).toThrow(
      errPos
    );
    expect(() => Ship(5, { origin: 'A-1', direction: 'DOWN' })).toThrow(
      errPos
    );
    expect(() => Ship(5, { origin: 'K1', direction: 'DOWN' })).toThrow(errPos);
    expect(() => Ship(5, { origin: 'K11', direction: 'DOWN' })).toThrow(
      errPos
    );
    expect(() => Ship(5, { origin: 'string', direction: 'DOWN' })).toThrow(
      errPos
    );
  });

  test('Throw if invalid position direction', () => {
    expect(() => Ship(5, { origin: 'A1', direction: 42 })).toThrow(errPos);
    expect(() => Ship(5, { origin: 'A1', direction: '' })).toThrow(errPos);
    expect(() => Ship(5, { origin: 'A1', direction: 'CENTER' })).toThrow(
      errPos
    );
  });

  test('Throw if no room for ship on grid', () => {
    expect(() => Ship(2, { origin: 'A1', direction: 'UP' })).toThrow();
    expect(() => Ship(2, { origin: 'A1', direction: 'LEFT' })).toThrow();
    expect(() => Ship(2, { origin: 'A10', direction: 'UP' })).toThrow();
    expect(() => Ship(2, { origin: 'A10', direction: 'RIGHT' })).toThrow();
    expect(() => Ship(2, { origin: 'J1', direction: 'DOWN' })).toThrow();
    expect(() => Ship(2, { origin: 'J1', direction: 'LEFT' })).toThrow();
    expect(() => Ship(2, { origin: 'J10', direction: 'DOWN' })).toThrow();
    expect(() => Ship(2, { origin: 'J10', direction: 'RIGHT' })).toThrow();
    expect(() => Ship(5, { origin: 'G10', direction: 'DOWN' })).toThrow();
    expect(() => Ship(5, { origin: 'A4', direction: 'LEFT' })).toThrow();
  });

  test('Create new ship top-left corner without errors', () => {
    expect(() => Ship(5, { origin: 'A1', direction: 'DOWN' })).not.toThrow();
    expect(() => Ship(5, { origin: 'A1', direction: 'RIGHT' })).not.toThrow();
  });

  test('Create new ship top-right corner without errors', () => {
    expect(() => Ship(5, { origin: 'A10', direction: 'DOWN' })).not.toThrow();
    expect(() => Ship(5, { origin: 'A10', direction: 'LEFT' })).not.toThrow();
  });

  test('Create new ship bottom-left corner without errors', () => {
    expect(() => Ship(5, { origin: 'J1', direction: 'UP' })).not.toThrow();
    expect(() => Ship(5, { origin: 'J1', direction: 'RIGHT' })).not.toThrow();
  });

  test('Create new ship bottom-right corner without errors', () => {
    expect(() => Ship(5, { origin: 'J10', direction: 'UP' })).not.toThrow();
    expect(() => Ship(5, { origin: 'J10', direction: 'LEFT' })).not.toThrow();
  });

  test('Get ship length', () => {
    expect(Ship(5, defaultPos).getLength()).toBe(5);
  });

  test('Ship hit count is zero when created', () => {
    expect(Ship(5, defaultPos).getHits()).toBe(0);
  });

  test('Ship is not sunk when created', () => {
    expect(Ship(5, defaultPos).isSunk()).toBe(false);
  });

  test('Ship is at correct position when created (default)', () => {
    const ship = Ship(5, defaultPos);
    expect(ship.getPosition()).toHaveProperty('origin', 'A1');
    expect(ship.getPosition()).toHaveProperty('direction', 'DOWN');
  });

  test('Ship is at correct position when created (custom)', () => {
    const ship = Ship(5, { origin: 'F10', direction: 'DOWN' });
    expect(ship.getPosition()).toHaveProperty('origin', 'F10');
    expect(ship.getPosition()).toHaveProperty('direction', 'DOWN');
  });

  test('New ship registers a hit against it', () => {
    const newShip = Ship(5, defaultPos);
    newShip.hit();
    expect(newShip.getHits()).toBe(1);
    expect(newShip.isSunk()).toBe(false);
  });

  test('Ship can sink', () => {
    const sunkShip = Ship(2, defaultPos);
    sunkShip.hit();
    expect(sunkShip.getHits()).toBe(1);
    expect(sunkShip.isSunk()).toBe(false);
    sunkShip.hit();
    expect(sunkShip.getHits()).toBe(2);
    expect(sunkShip.isSunk()).toBe(true);
  });
});
