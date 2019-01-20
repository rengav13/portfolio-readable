import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Score from "../score/Score";

import { disablePost, editPost, votePost } from "../../actions/posts";
import Information from "../commom/Information";
import PostActions from "./PostActions";

const style = theme => ({
  root: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2
  },
  postTitle: {
    display: 'flex',
    displayDirections: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center'
  },
  postInfo: {
    display: 'flex',
    displayDirections: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

class PostDetail extends React.Component {

  onNewScore = option => {
    const { post } = this.props;
    this.props.dispatch(votePost(post.id, option));
  };

  onPostUpdate = post => {
    this.props.dispatch(editPost(post));
  };

  onPostDelete = () => {
    const { post, dispatch } = this.props;
    dispatch(disablePost(post.id));
  };

  render() {
    const { classes, post } = this.props;

    return (
      <Paper className={ classes.root } elevation={ 1 }>
        <div className={classes.postTitle }>
          <Typography variant='h5' component='h3'>
            { post.title }
          </Typography>
          <PostActions
            post={ post }
            onUpdate={ this.onPostUpdate }
            onDelete={ this.onPostDelete }
          />
        </div>
        <br/>
        <Typography component='p'>
          { post.body }
        </Typography>
        <br/>
        <Divider/>
        <div className={ classes.postInfo }>
          <Information
            author={ post.author }
            timestamp={ post.timestamp }
            category={ post.category }
          />
          <Score
            score={ post.voteScore }
            onChange={ this.onNewScore }
          />
        </div>
      </Paper>
    );
  }
}

PostDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

export default connect()(withStyles(style)(PostDetail));