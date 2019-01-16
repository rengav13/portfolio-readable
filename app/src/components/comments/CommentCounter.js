import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import AmountValue from '../commom/AmountValue';

const styles = {
  root: {
    display: 'flex',
    displayDirections: 'row'
  }
};

const CommentCounter = ({ classes, count = 0 }) => {
  const isPlural = count > 1;
  const noComment = count === 0;
  let element = null;

  if (noComment) {
    element = (
      <div className={ classes.root }>
        <Typography>
          No comments
        </Typography>
      </div>
    );
  } else {
    element = (
      <div className={ classes.root }>
        <AmountValue amount={ count }/>
        &nbsp;
        <Typography>
          comment
          { isPlural && `s` }
        </Typography>
      </div>
    );
  }

  return element;
};

CommentCounter.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number
};

export default withStyles(styles)(CommentCounter);