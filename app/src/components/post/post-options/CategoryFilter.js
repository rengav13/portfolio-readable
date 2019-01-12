import React from 'react';
import PropTypes from 'prop-types';

import SelectOption from "../../commom/SelectOption";

const CATEGORIES = [
  {
    id: 'react',
    label: 'React'
  },
  {
    id: 'redux',
    label: 'Redux'
  },
  {
    id: 'udacity',
    label: 'Udacity'
  }
];

class CategoryFilter extends React.Component {

  render() {
    const { onChange } = this.props;

    return (
      <SelectOption
        title='Category'
        options={ CATEGORIES }
        onSelect={ onChange }
        hasAllOption={ true }
      />
    );
  }
}

CategoryFilter.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default CategoryFilter;