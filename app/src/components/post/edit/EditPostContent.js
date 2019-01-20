import React from 'react';
import PropTypes from 'prop-types';

import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Information from "../../commom/Information";

class EditPostContent extends React.Component {

  handleChange = property => event => {
    this.props.onChange(property, event.target.value);
  };

  render() {
    const { post } = this.props;

    return (
      <DialogContent>
        <TextField
          id='title'
          autoFocus
          variant='outlined'
          margin='dense'
          label='Title'
          value={ post.title }
          onChange={ this.handleChange('title') }
          fullWidth
        />
        <TextField
          id='body'
          multiline
          rows='5'
          variant='outlined'
          margin='dense'
          label='Body'
          value={ post.body }
          onChange={ this.handleChange('body') }
          fullWidth
        />
        <Information
          author={ post.author }
          timestamp={ post.timestamp }
        />
      </DialogContent>
    );
  }
}

EditPostContent.propTypes = {
  post: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default EditPostContent;
