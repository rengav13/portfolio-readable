import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import ButtonIcon from '@material-ui/core/IconButton';

import { MdAdd } from 'react-icons/md';

const style = {
  comment: {
    display: 'flex',
    displayDirections: 'row',
    alignItems: 'center'
  }
};

class AddComment extends React.Component {

  state = {
    comment: ''
  };

  handleChange = event => this.setState({ comment: event.target.value });

  handleClick = () => {
    const { comment } = this.state;
    this.props.onAdd(comment);
    this.setState({ comment: '' });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.comment }>
        <TextField
          id='author'
          autoFocus
          variant='outlined'
          margin='dense'
          label='Comment'
          placeholder='Type here a new comment...'
          fullWidth
          value={ this.state.comment }
          onChange={ this.handleChange }
        />
        <ButtonIcon onClick={ this.handleClick }>
          <MdAdd/>
        </ButtonIcon>
      </div>
    );
  }
}

AddComment.propTypes = {
  classes: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default withStyles(style)(AddComment);