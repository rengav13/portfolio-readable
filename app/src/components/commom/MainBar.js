import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
    textAlign: 'center'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class MainBar extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.root }>
        <AppBar position="static">
          <Toolbar>
            <Typography variant='h6' color='inherit' className={ classes.grow }>
              Readable
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MainBar.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(MainBar);