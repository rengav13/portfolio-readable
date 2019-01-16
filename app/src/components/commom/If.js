import React from 'react';
import PropTypes from 'prop-types';

const If = ({ test, testTrue, testFalse }) => {
  let element = test ? testTrue : testFalse;
  return element ? (element) : null;
};

If.propTypes = {
  test: PropTypes.bool.isRequired,
  testTrue: PropTypes.element,
  testFalse: PropTypes.element
};

export default If;