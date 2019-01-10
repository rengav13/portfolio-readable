import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import { between, BILLION, MILLION, THOUSAND, TRILLION } from '../../util/NumberUtil';

const AmountValue = (props) => {
  const number = Math.abs(props.amount);
  let numberFormatted = `${props.amount}`;

  if (between(number, THOUSAND, MILLION - 1)) {
    numberFormatted = `${Math.round(props.amount / THOUSAND).toFixed(1)}K`;
  } else if (between(number, MILLION, BILLION - 1)) {
    numberFormatted = `${Math.round(props.amount / MILLION).toFixed(1)}M`;
  } else if (between(number, BILLION, TRILLION - 1)) {
    numberFormatted = `${Math.round(props.amount / BILLION).toFixed(1)}B`;
  }

  return (
    <Typography>
      { numberFormatted }
    </Typography>
  );
};

AmountValue.propTypes = {
  amount: PropTypes.number.isRequired
};

export default AmountValue;