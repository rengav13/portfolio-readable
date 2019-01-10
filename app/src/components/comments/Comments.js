import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = (theme) => ({
  commentList: {
    backgroundColor: theme.palette.background.paper
  }
});

const Comments = ({ classes, collapse }) => {

  return (
    <Collapse in={ collapse }>
      <Divider/>
      <List component='nav' className={ classes.commentList }>
        <ListItem>
          <ListItemText primary='kjdshfjkshdfjkhsfjdkhksdhfkjsdhfkjs jdfsnksjdhj hkjdsh kjsd'/>
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemText primary='kjdshfjkshdfjkhsfjdkhksdhfkjsdhfkjs jdfsnksjdhj hkjdsh kjsd'/>
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemText primary='kjdshfjkshdfjkhsfjdkhksdhfkjsdhfkjs jdfsnksjdhj hkjdsh kjsd'/>
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemText primary='kjdshfjkshdfjkhsfjdkhksdhfkjsdhfkjs jdfsnksjdhj hkjdsh kjsd'/>
        </ListItem>
        <Divider/>
      </List>
    </Collapse>
  );
};

Comments.propTypes = {
  classes: PropTypes.object.isRequired,
  collapse: PropTypes.bool.isRequired,
  postId: PropTypes.string.isRequired
};

export default withStyles(styles)(Comments);