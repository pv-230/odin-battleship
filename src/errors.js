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

module.exports = { GameboardErrors, ShipErrors };
