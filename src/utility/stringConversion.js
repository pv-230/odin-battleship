/**
 * Converts a tile string to array indexes for the grid.
 * @param {string} tileStr Represents a tile (e.g. 'A1').
 * @returns Object with 'row' and 'col' properties.
 */
const toGridCoord = (tileStr) => {
  // Convert row substring to uppercase ASCII code and subtract 65
  const row = tileStr.slice(0, 1).toUpperCase().charCodeAt(0) - 65;
  const col = parseInt(tileStr.slice(1), 10) - 1;
  return { row, col };
};

/**
 * Converts array indexes to a tile string
 * @param row Row index
 * @param col Column index
 * @returns A tile string (e.g. 'A1')
 */
const toTileStr = (row, col) => String.fromCharCode(65 + row).concat(`${col + 1}`);

/**
 * Converts a status number from a tile to a string description.
 * @param {number} status 0 = unknown, 1 = missed, 2 = hit
 */
const statusToString = (status) => {
  if (status === 1) {
    return 'missed';
  }

  if (status === 2) {
    return 'hit';
  }

  return '';
};

module.exports = { toGridCoord, toTileStr, statusToString };
