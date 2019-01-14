import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import Timestamp from '../commom/Timestamp';

// Linkar com a tela de perfil de usuário
const PostInfo = ({ timestamp, author }) =>
  <Typography>
    Posted by <a href='/'>{ author }</a>, <Timestamp timestamp={ timestamp }/>.
  </Typography>;

PostInfo.propTypes = {
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired
};

export default PostInfo;