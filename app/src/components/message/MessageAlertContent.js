import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import SnackbarContent from '@material-ui/core/SnackbarContent';

const style = theme => ({
  error: {
    backgroundColor: theme.palette.error.dark
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
});

class MessageAlertContent extends React.Component {

  render() {
    const { classes, message, ...other } = this.props;

    return (
      <SnackbarContent
        className={ classes.error }
        message={
          <span className={classes.message}>{ message }</span>
        }
        {...other}
      />
    );
  }
}

MessageAlertContent.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.string
};

export default withStyles(style)(MessageAlertContent);