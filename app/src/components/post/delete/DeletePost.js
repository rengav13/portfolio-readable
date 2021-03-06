import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';

import DefaultDialogActions from "../../commom/DefaultDialogActions";

class DeletePost extends React.Component {

  render() {
    const { open, onDelete, onCancel } = this.props;

    return (
      <Dialog
        fullWidth={ true }
        maxwidth='xl'
        open={ open }
        onClose={ onDelete }
      >
        <DialogTitle>
          Delete Post
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the post?
          </DialogContentText>
        </DialogContent>
        <DefaultDialogActions
          onCancel={ onCancel }
          onConfirm={ () => onDelete() }
        />
      </Dialog>
    );
  }
}

DeletePost.propTypes = {
  open: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default DeletePost;