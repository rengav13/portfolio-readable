import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Timestamp = ({ timestamp }) =>
  <label>
    { moment(timestamp).fromNow() }
  </label>;

Timestamp.propTypes = {
  timestamp: PropTypes.number.isRequired
};

export default Timestamp;