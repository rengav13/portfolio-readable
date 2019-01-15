export const isBlank = (str) =>
  !str || str === '';

export const capitalize = (str = '') => {
  return typeof str !== 'string'
    ? ''
    : str[ 0 ].toUpperCase() + str.slice(1);
};