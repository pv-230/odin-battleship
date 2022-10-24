const Player = (n) => {
  const name = n || 'Computer';

  const getName = () => name;

  const attack = (gameboard, tile = null) => {
    if (tile) return gameboard.receiveAttack(tile) ? tile : null;
    return null;
  };

  return {
    getName,
    attack,
  };
};

module.exports = Player;
