import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DefaultDialogActions from "../../commom/DefaultDialogActions";
import Information from "../../commom/Information";

class EditComment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: props.comment || {}
    };
  }

  handleChange = event => {
    const { value } = event.target;

    this.setState(({ comment }) => ({
        comment: {
          ...comment,
          body: value
        }
      })
    );
  };

  render() {
    const { open, onSuccess, onCancel } = this.props;
    const { comment } = this.state;

    return (
      <Dialog
        fullWidth={ true }
        maxwidth='xl'
        open={ open }
        onClose={ onSuccess }
      >
        <DialogTitle>Edit Comment</DialogTitle>

        <DialogContent>
          <TextField
            id='comment'
            autoFocus
            variant='outlined'
            margin='dense'
            label='Comment'
            value={ comment.body }
            onChange={ this.handleChange }
            fullWidth
          />
          <Information
            author={ comment.author }
            timestamp={ comment.timestamp }
          />
        </DialogContent>

        <DefaultDialogActions
          onCancel={ onCancel }
          onConfirm={ () => onSuccess(comment) }
        />
      </Dialog>
    );
  }
}

EditComment.propTypes = {
  comment: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default EditComment;