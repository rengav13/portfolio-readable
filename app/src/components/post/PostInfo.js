import React from 'react';
import PropTypes from 'prop-types';

import Timestamp from '../commom/Timestamp';

// Linkar com a tela de perfil de usuário
const PostInfo = ({ timestamp, author }) =>
  <label>
    Posted by <a href='/'>{ author }</a>, <Timestamp timestamp={ timestamp }/>
  </label>;

PostInfo.propTypes = {
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired
};

export default PostInfo;