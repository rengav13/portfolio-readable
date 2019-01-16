import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import Timestamp from './Timestamp';

const UserInfo = ({ timestamp, author }) =>
  <Typography variant='overline'>
    Posted by { author }, <Timestamp timestamp={ timestamp }/>.
  </Typography>;

UserInfo.propTypes = {
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired
};

export default UserInfo;