import React from 'react';
import PropTypes from 'prop-types';

import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const DefaultDialogActions = ({ onCancel, onConfirm }) =>
  <DialogActions>
    <Button
      variant='outlined'
      color='secondary'
      onClick={ onCancel }
    >
      <Typography>Cancel</Typography>
    </Button>
    <Button
      variant='outlined'
      color='primary'
      onClick={ onConfirm }
    >
      <Typography>Confirm</Typography>
    </Button>
  </DialogActions>
;

DefaultDialogActions.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default DefaultDialogActions;