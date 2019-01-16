import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Score from '../score/Score';
import PostCategory from './PostCategory';
import UserInfo from '../commom/UserInfo';
import CommentCounter from "../comments/CommentCounter";

import { editPost, votePost } from '../../actions/posts';
import PostActions from "./PostActions";
import { disablePost } from "../../actions/posts";

const styles = theme => ({
  card: {
    margin: '5px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  actions: {
    display: 'flex'
  },
  commentCounter: {
    marginLeft: 'auto',
    marginRight: theme.spacing.unit * 3
  }
});

class Post extends React.Component {

  state = {
    openPost: false
  };

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
      <Card className={ classes.card }>
        <CardHeader
          action={
            <PostActions
              post={ post }
              onUpdate={ this.onPostUpdate }
              onDelete={ this.onPostDelete }
            />
          }
          title={
            <PostCategory category={ post.category }/>
          }
          subheader={
            <UserInfo
              timestamp={ post.timestamp }
              author={ post.author }
            />
          }
        />
        <Link to={ `/${post.category}/${post.id}` }>
          <CardContent>
            <Typography>
              { post.title }
            </Typography>
          </CardContent>
        </Link>
        <CardActions
          className={ classes.actions }
          disableActionSpacing
        >
          <Score
            score={ post.voteScore }
            onChange={ this.onNewScore }
          />

          <div className={ classes.commentCounter }>
            <CommentCounter count={ post.commentCount }/>
          </div>
        </CardActions>
      </Card>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

export default connect()(withStyles(styles)(Post));