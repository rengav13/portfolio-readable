import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { MdArrowBack } from 'react-icons/md';
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
    const { classes, hasBackButton } = this.props;

    return (
      <div className={ classes.root }>
        <AppBar position="static">
          <Toolbar>
            { hasBackButton &&
            <Link to='/'>
              <IconButton
                color="inherit">
                <MdArrowBack/>
              </IconButton>
            </Link>
            }
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
  classes: PropTypes.object.isRequired,
  hasBackButton: PropTypes.bool
};

export default withStyles(styles)(MainBar);