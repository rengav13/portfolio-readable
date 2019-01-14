import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DefaultDialogActions from "../../commom/DefaultDialogActions";
import NewPostContent from "./NewPostContent";

class NewPost extends React.Component {

  state = {
    post: {}
  };

  handleChange = (property, value) => {
    this.setState(({ post }) => ({
      post: {
        ...post,
        [ property ]: value
      }
    }));
  };

  render() {
    const { open, onSubmit, onCancel } = this.props;
    const { post } = this.state;

    return (
      <Dialog
        fullWidth={ true }
        maxwidth='xl'
        open={ open }
        onClose={ onSubmit }
      >
        <DialogTitle>New Post</DialogTitle>
        <NewPostContent
          post={ post }
          onChange={ this.handleChange }
        />
        <DefaultDialogActions
          onCancel={ onCancel }
          onConfirm={ () => onSubmit(post) }
        />
      </Dialog>
    );
  }
}

NewPost.propTypes = {
  open: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default NewPost;