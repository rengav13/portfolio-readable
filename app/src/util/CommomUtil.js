export const getSafe = (property, obj, defaultValue = null) => {
  let value = defaultValue;

  if (!!obj && !!obj[ property ]) {
    value = obj[ property ];
  }

  return value;
};