import React from 'react';
import PropTypes from 'prop-types';

import SelectOption from "../commom/SelectOption";

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

class CategorySelect extends React.Component {

  render() {
    const { onChange, hasAllOption } = this.props;

    return (
      <SelectOption
        title='Category'
        options={ CATEGORIES }
        onSelect={ onChange }
        hasAllOption={ !!hasAllOption }
      />
    );
  }
}

CategorySelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  hasAllOption: PropTypes.bool,
};

export default CategorySelect;