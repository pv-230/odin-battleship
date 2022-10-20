const Gameboard = require('../src/models/Gameboard');

describe('Gameboard', () => {
  test('Can place new ship on gameboard (up)', () => {
    const gameboard = Gameboard();
    gameboard.placeShip(5, { origin: 'E1', direction: 'UP' });
    expect(gameboard.getTile('E1').ship.getPosition()).toHaveProperty(
      'origin',
      'E1'
    );
    expect(gameboard.getTile('D1').ship.getPosition()).toHaveProperty(
      'origin',
      'E1'
    );
    expect(gameboard.getTile('C1').ship.getPosition()).toHaveProperty(
      'origin',
      'E1'
    );
    expect(gameboard.getTile('B1').ship.getPosition()).toHaveProperty(
      'origin',
      'E1'
    );
    expect(gameboard.getTile('A1').ship.getPosition()).toHaveProperty(
      'origin',
      'E1'
    );
  });

  test('Can place new ship on gameboard (down)', () => {
    const gameboard = Gameboard();
    gameboard.placeShip(5, { origin: 'A1', direction: 'DOWN' });
    expect(gameboard.getTile('A1').ship.getPosition()).toHaveProperty(
      'origin',
      'A1'
    );
    expect(gameboard.getTile('B1').ship.getPosition()).toHaveProperty(
      'origin',
      'A1'
    );
    expect(gameboard.getTile('C1').ship.getPosition()).toHaveProperty(
      'origin',
      'A1'
    );
    expect(gameboard.getTile('D1').ship.getPosition()).toHaveProperty(
      'origin',
      'A1'
    );
    expect(gameboard.getTile('E1').ship.getPosition()).toHaveProperty(
      'origin',
      'A1'
    );
  });
});
