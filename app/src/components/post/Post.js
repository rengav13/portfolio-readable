import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Score from '../score/Score';
import PostCategory from './PostCategory';
import PostInfo from './PostInfo';
import Comments from "../comments/Comments";
import CommentsIcon from "../comments/CommentsIcon";

import { editPost, votePost } from '../../actions/index';
import PostActions from "./PostActions";
import { disablePost } from "../../actions";

const styles = {
  card: {
    margin: '5px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  actions: {
    display: 'flex'
  }
};

class Post extends React.Component {

  state = {
    expanded: false
  };

  handleClickCommentsIcon = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  onNewScore = option => {
    const { post } = this.props;
    this.props.dispatch(votePost(post.id, option));
  };

  onPostUpdated = post => {
    this.props.dispatch(editPost(post));
  };

  onPostDeleted = () => {
    const { post, dispatch } = this.props;
    dispatch(disablePost(post.id));
  };

  render() {
    const { classes, post } = this.props;

    return (
      <Card className={ classes.card }>
        <CardHeader
          action={
            <PostActions
              post={ post }
              onUpdated={ this.onPostUpdated }
              onDeleted={ this.onPostDeleted }
            />
          }
          title={
            <PostCategory category={ post.category }/>
          }
          subheader={
            <PostInfo
              timestamp={ post.timestamp }
              author={ post.author }
            />
          }
        />
        <CardContent>
          <Typography>
            { post.title }
          </Typography>
        </CardContent>
        <CardActions
          className={ classes.actions }
          disableActionSpacing
        >
          <Score
            score={ post.voteScore }
            onChange={ this.onNewScore }
          />

          <CommentsIcon
            count={ post.commentCount }
            onClick={ this.handleClickCommentsIcon }
          />
        </CardActions>
        <Comments
          collapse={ this.state.expanded }
          postId={ post.id }
        />
      </Card>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

export default connect()(withStyles(styles)(Post));