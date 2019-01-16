import React from 'react';
import PropTypes from 'prop-types';

const If = ({ test, testTrue, testFalse }) => {
  console.log('TESTE: ',test)
  let element = test ? testTrue : testFalse;
  return element ? (element) : null;
};

If.propTypes = {
  test: PropTypes.bool.isRequired,
  testTrue: PropTypes.element,
  testFalse: PropTypes.element
};

export default If;