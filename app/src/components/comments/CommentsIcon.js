import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { MdInsertComment } from 'react-icons/md';

import AmountValue from '../commom/AmountValue';

const styles = {
  button: {
    marginLeft: 'auto',
  }
};

const CommentsIcon = ({ classes, count = 0, onClick }) => {
  const showBadge = count > 0;

  return (
    <IconButton
      className={ classes.button }
      onClick={ onClick }
      aria-label="Show comments"
    >
      <Badge color="secondary"
             badgeContent={
               <AmountValue amount={ count }/>
             }
             invisible={ !showBadge }
      >
        <MdInsertComment/>
      </Badge>
    </IconButton>
  );
};

CommentsIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number,
  onClick: PropTypes.func
};

export default withStyles(styles)(CommentsIcon);