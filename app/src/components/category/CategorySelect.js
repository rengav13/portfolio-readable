import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SelectOption from "../commom/SelectOption";
import { fetchCategories } from "../../actions/categories";
import { capitalize } from "../../util/StringUtil";

class CategorySelect extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  render() {
    const { categories, onChange, hasAllOption, disabled, defaultValue } = this.props;

    return (
      <SelectOption
        title='Category'
        options={ categories }
        onSelect={ onChange }
        hasAllOption={ !!hasAllOption }
        disabled={ !!disabled }
        defaultValue={ defaultValue }
      />
    );
  }
}

CategorySelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  hasAllOption: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.any
};

const mapStateToProps = ({ categories }) => {
  const options = categories.map(category => ({
    id: category.name,
    label: capitalize(category.path)
  }));
  return { categories: options };
};

export default connect(mapStateToProps)(CategorySelect);