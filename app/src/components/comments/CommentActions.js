import React from 'react';
import PropTypes from 'prop-types';

import { MdDelete, MdEdit, MdMoreVert } from "react-icons/md";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Typography from '@material-ui/core/Typography';
import DeleteComment from "./delete/DeleteComment";
import EditComment from "./edit/EditComment";

class CommentActions extends React.Component {

  state = {
    anchorEl: null,
    openEditComment: false,
    openDeleteComment: false
  };

  handleOpen = event => this.setState({ anchorEl: event.currentTarget });

  handleClose = () => this.setState({ anchorEl: null });

  handleEdit = () => {
    this.setState({ openEditComment: true });
  };

  handleDelete = () => {
    this.setState({ openDeleteComment: true });
  };

  handleUpdateSuccess = (comment) => {
    this.setState((state, props) => {
      props.onUpdate(comment);
      return {
        anchorEl: null,
        openEditComment: false
      };
    });
  };

  handleDeleteSuccess = () => {
    this.setState((state, props) => {
      props.onDelete();
      return {
        anchorEl: null,
        openDeleteComment: false
      };
    });
  };

  handleCancel = () => this.setState({
    anchorEl: null,
    openEditComment: false,
    openDeleteComment: false
  });

  render() {
    const { anchorEl, openEditComment, openDeleteComment } = this.state;
    const { comment } = this.props;

    return (
      <div>
        <IconButton
          aria-owns={ anchorEl ? 'options' : undefined }
          aria-haspopup='true'
          onClick={ this.handleOpen }
        >
          <MdMoreVert/>
        </IconButton>

        <Menu
          id='options'
          anchorEl={ anchorEl }
          open={ Boolean(anchorEl) }
          onClose={ this.handleClose }
        >
          <MenuItem onClick={ this.handleEdit }>
            <MdEdit/>
            &nbsp;&nbsp;
            <Typography>
              Edit
            </Typography>
          </MenuItem>
          <EditComment
            comment={ comment }
            open={ openEditComment }
            onSuccess={ this.handleUpdateSuccess }
            onCancel={ this.handleCancel }
          />
          <MenuItem onClick={ this.handleDelete }>
            <MdDelete/>
            &nbsp;&nbsp;
            <Typography>
              Delete
            </Typography>
          </MenuItem>
          <DeleteComment
            open={ openDeleteComment }
            onDelete={ this.handleDeleteSuccess }
            onCancel={ this.handleCancel }
          />
        </Menu>
      </div>
    );
  }
}

CommentActions.propTypes = {
  comment: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default CommentActions;