const GameboardErrors = {
  proximity: 'Ship cannot be placed too close to others',
  invalidTileStr: 'Invalid tile string',
  missingLengthArg: 'Missing length argument',
  maxShipCount: 'Max ship count reached',
};

const ShipErrors = {
  invalidShipLength: 'Invalid ship length',
  invalidShipPosition: 'Invalid ship position',
};

const PlayerErrors = {
  noValidMoves: 'No valid moves remaining',
  compAttackFailed: 'Computer attack failed',
  invalidDirection: 'Invalid direction',
};

module.exports = { GameboardErrors, ShipErrors, PlayerErrors };
