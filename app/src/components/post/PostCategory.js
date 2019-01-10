import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit
  },
});

const PostCategory = ({ classes, category }) =>
  <Chip label={ category } className={ classes.chip }/>;

PostCategory.propTypes = {
  classes: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired
};

export default withStyles(styles)(PostCategory);