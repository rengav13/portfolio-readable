import React from 'react';
import PropTypes from 'prop-types';

import { MdDelete, MdEdit, MdMoreVert } from "react-icons/md";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Typography from '@material-ui/core/Typography';
import EditPost from "./edit/EditPost";
import DeletePost from "./delete/DeletePost";

class PostActions extends React.Component {

  state = {
    anchorEl: null,
    openEditPost: false,
    openDeletePost: false
  };

  handleOpen = event => this.setState({ anchorEl: event.currentTarget });

  handleClose = () => this.setState({ anchorEl: null });

  handleEdit = () => {
    this.setState({ openEditPost: true });
  };

  handleDelete = () => {
    this.setState({ openDeletePost: true });
  };

  handleUpdateSuccess = (post) => {
    this.setState((state, props) => {
      props.onUpdated(post);
      return {
        anchorEl: null,
        openEditPost: false
      };
    });
  };

  handleDeleteSuccess = () => {
    this.setState((state, props) => {
      props.onDeleted();
      return {
        anchorEl: null,
        openDeletePost: false
      };
    });
  };

  handleCancel = () => this.setState({
    anchorEl: null,
    openEditPost: false,
    openDeletePost: false
  });

  render() {
    const { anchorEl, openEditPost, openDeletePost } = this.state;
    const { post } = this.props;

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
          <EditPost
            post={ post }
            open={ openEditPost }
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
          <DeletePost
            open={ openDeletePost }
            onDelete={ this.handleDeleteSuccess }
            onCancel={ this.handleCancel }
          />
        </Menu>
      </div>
    );
  }
}

PostActions.propTypes = {
  post: PropTypes.object.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onUpdated: PropTypes.func.isRequired
};

export default PostActions;