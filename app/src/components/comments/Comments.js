import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import AddComment from './add/AddComment';
import ListComments from './ListComments';
import { addComment, fetchCommentsByPost } from "../../actions/comments";
import CommentCounter from "./CommentCounter";

const style = theme => ({
  root: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2
  },
  postInfo: {
    display: 'flex',
    displayDirections: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  addComment: {
    marginBottom: theme.spacing.unit * 1
  }
});

class Comments extends React.Component {

  componentDidMount() {
    const { post } = this.props;
    this.props.dispatch(fetchCommentsByPost(post.id));
  }

  handleAddComment = comment => {
    const { post } = this.props;
    this.props.dispatch(addComment(post, comment));
  };

  render() {
    const { classes, comments } = this.props;

    return (
      <Paper className={ classes.root } elevation={ 1 }>
        <div className={ classes.addComment }>
          <AddComment onAdd={ this.handleAddComment }/>
        </div>

        <Divider/>

        <br/>
        <CommentCounter count={ comments.length }/>

        <ListComments comments={ comments }/>
      </Paper>
    );
  }
}

const mapStateToProps = ({ comments }) => ({ comments });

Comments.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(style)(Comments));