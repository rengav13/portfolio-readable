export const isBlank = (str) =>
  !str || str === '';

export const capitalize = (str = '') => {
  return typeof str !== 'string'
    ? ''
    : str[ 0 ].toUpperCase() + str.slice(1);
};

export const newKey = () =>
  Math.random().toString(20).substr(2, 10).concat(Math.random().toString(20).substr(2, 10));