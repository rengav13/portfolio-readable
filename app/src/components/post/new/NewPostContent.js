import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import CategorySelect from "../../category/CategorySelect";

const style = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
};

class NewPostContent extends React.Component {

  handleChange = property => event => this.props.onChange(property, event.target.value);

  handleChangeCategory = (category) => this.props.onChange('category', category);

  render() {
    const { classes } = this.props;

    return (
      <DialogContent>
        <div className={ classes.root }>
          <TextField
            id='author'
            autoFocus
            variant='outlined'
            margin='dense'
            label='Author'
            onChange={ this.handleChange('author') }
          />

          <CategorySelect
            hasAllOption={ false }
            onChange={ this.handleChangeCategory }
          />
        </div>

        <TextField
          id='title'
          variant='outlined'
          margin='dense'
          label='Title'
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
          onChange={ this.handleChange('body') }
          fullWidth
        />

      </DialogContent>
    );
  }
}

NewPostContent.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default withStyles(style)(NewPostContent);