import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import Timestamp from './Timestamp';

const Information = ({ timestamp, author, category }) =>
  <Typography variant='overline'>
    Posted by { author }, <Timestamp timestamp={ timestamp }/>{ category && ` on ${ category}` }.
  </Typography>;

Information.propTypes = {
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  category: PropTypes.string
};

export default Information;