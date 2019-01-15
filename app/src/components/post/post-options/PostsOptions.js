import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CategorySelect from "../../category/CategorySelect";
import PostsSortBy from "./PostsSortBy";

const style = {
  root: {
    maxWidth: '100%',
    display: 'flex',
    displayDirections: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  options: {
    display: 'flex',
    displayDirections: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
    height: '80px',
    width: '60%'
  },
  verticalDivider: {
    borderLeft: '1px solid #e2e2e2',
    width: '1px',
    height: '100%',
    margin: '10px'
  }
};

const PostsOptions = ({ classes, filterDisabled, category, onChangeSort, onChangeCategory }) =>
  <div className={ classes.root }>

    <div className={ classes.options }>
      <CategorySelect
        onChange={ onChangeCategory }
        hasAllOption={ true }
        disabled={ filterDisabled }
        defaultValue={ category }
      />

      <div className={ classes.verticalDivider }/>

      <PostsSortBy onChange={ onChangeSort }/>
    </div>

  </div>;

PostsOptions.propTypes = {
  classes: PropTypes.object.isRequired,
  filterDisabled: PropTypes.bool,
  category: PropTypes.string,
  onChangeSort: PropTypes.func.isRequired,
  onChangeCategory: PropTypes.func.isRequired
};

export default withStyles(style)(PostsOptions);