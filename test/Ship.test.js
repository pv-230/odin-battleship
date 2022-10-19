const Ship = require('../src/models/Ship').default;

describe('Ship', () => {
  const defaultPos = {
    origin: 'A1',
    direction: 'DOWN',
  };

  test('Ship throws if missing length argument', () => {
    expect(() => Ship()).toThrow();
  });

  test('Ship throws if missing position argument', () => {
    expect(() => Ship(5)).toThrow();
  });

  test('Ship throws if length argument is invalid', () => {
    expect(() => Ship(1.5, defaultPos)).toThrow();
    expect(() => Ship('1', defaultPos)).toThrow();
    expect(() => Ship(1, defaultPos)).toThrow();
    expect(() => Ship(6, defaultPos)).toThrow();
  });

  test('Ship throws if position argument is invalid', () => {
    expect(() => Ship(5, {})).toThrow();
    expect(() => Ship(5, { origin: 'A1' })).toThrow();
    expect(() => Ship(5, { direction: 'DOWN' })).toThrow();
    expect(() => Ship(5, { origin: 1, direction: 'DOWN' })).toThrow();
    expect(() => Ship(5, { origin: 'I1', direction: 'DOWN' })).toThrow();
    expect(() => Ship(5, { origin: 'A10', direction: 'DOWN' })).toThrow();
    expect(() => Ship(5, { origin: '1A', direction: 'DOWN' })).toThrow();
    expect(() => Ship(5, { origin: 'A-1', direction: 'DOWN' })).toThrow();
    expect(() => Ship(5, { origin: 'A1', direction: 0 })).toThrow();
    expect(() => Ship(5, { origin: 'E1', direction: 'DOWN' })).toThrow();
    expect(() => Ship(5, { origin: 'A1', direction: 'LEFT' })).toThrow();
    expect(() => Ship(5, { origin: 'A1', direction: 'UP' })).toThrow();
    expect(() => Ship(5, { origin: 'A6', direction: 'RIGHT' })).toThrow();
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
    expect(ship.getPosition()).toHaveProperty(origin, 'A1');
    expect(ship.getPosition()).toHaveProperty(direction, 'DOWN');
  });

  test('Ship is at correct position when created (custom)', () => {
    const ship = Ship(5, { origin: 'D9', direction: 'DOWN' });
    expect(ship.getPosition()).toHaveProperty(origin, 'D9');
    expect(ship.getPosition()).toHaveProperty(direction, 'DOWN');
  });

  test('New ship registers a hit against it', () => {
    const newShip = Ship(5, defaultPos);
    newShip.hit();
    expect(newShip.getHits()).toBe(1);
    expect(newShip.isSunk()).toBe(false);
  });

  test('Badly damaged ship gets sunk', () => {
    const sunkShip = Ship(2, defaultPos);
    sunkShip.hit();
    sunkShip.hit();
    expect(sunkShip.getHits()).toBe(2);
    expect(sunkShip.isSunk()).toBe(true);
  });
});
