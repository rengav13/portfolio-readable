import React from 'react';

import { MdMoreVert, MdEdit, MdDelete } from "react-icons/md";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Typography from '@material-ui/core/Typography';

class PostActions extends React.Component {

  state = {
    anchorEl: null
  };

  handleClick = event => this.setState({ anchorEl: event.currentTarget });

  handleClose = () => this.setState({ anchorEl: null });

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          aria-owns={ anchorEl ? 'options' : undefined }
          aria-haspopup='true'
          onClick={ this.handleClick }
        >
          <MdMoreVert/>
        </IconButton>

        <Menu
          id='options'
          anchorEl={ anchorEl }
          open={ Boolean(anchorEl) }
          onClose={ this.handleClose }
        >
          <MenuItem onClick={ this.handleClose }>
            <MdEdit />
            &nbsp;&nbsp;
            <Typography>
              Edit
            </Typography>
          </MenuItem>
          <MenuItem onClick={ this.handleClose }>
            <MdDelete/>
            &nbsp;&nbsp;
            <Typography>
              Delete
            </Typography>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default PostActions;