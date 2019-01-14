import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditPostContent from "./EditPostContent";
import DefaultDialogActions from "../../commom/DefaultDialogActions";

class EditPost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      post: props.post || {}
    };
  }

  handleChange = (property, value) => {
    this.setState(({ post }) => ({
        post: {
          ...post,
          [ property ]: value
        }
      })
    );
  };

  render() {
    const { open, onSuccess, onCancel } = this.props;
    const { post } = this.state;

    return (
      <Dialog
        fullWidth={ true }
        maxwidth='xl'
        open={ open }
        onClose={ onSuccess }
      >
        <DialogTitle>Edit Post</DialogTitle>
        <EditPostContent
          post={ post }
          onChange={ this.handleChange }
        />
        <DefaultDialogActions
          onCancel={ onCancel }
          onConfirm={ () => onSuccess(post) }
        />
      </Dialog>
    );
  }
}

EditPost.propTypes = {
  open: PropTypes.bool.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  post: PropTypes.object
};

export default EditPost;