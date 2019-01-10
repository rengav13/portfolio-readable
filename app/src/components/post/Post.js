import React from 'react';

import { MdMoreVert } from 'react-icons/md';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import Score from '../score/Score';
import PostCategory from './PostCategory';
import PostInfo from './PostInfo';
import Comments from "../comments/Comments";
import CommentsIcon from "../comments/CommentsIcon";

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

/*
  TODO:
    - To add actions to edit and delete posts
    - To add filters and sort for DefaultPage.
    - To add FloatButton to add post
    - To exchange variable score from state to props
    - To add redux state management to application
    - To link username to a user's page
    - To link category to categry view (List posts by category)
    - To implement comments list for post in post's list (it must be paged, enable comment add, enable vote comment)
 */
class Post extends React.Component {

  state = {
    expanded: false,
    score: 0
  };

  handleClickCommentsIcon = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  onNewScore = (newScore) => {
    this.setState({ score: newScore });
  };

  render() {
    const { classes, post } = this.props;
    const { score } = this.state;

    return (
      <Card className={ classes.card }>
        <CardHeader
          action={
            <PostActions/>
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
            score={ score }
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

const PostActions = () =>
  <IconButton>
    <MdMoreVert/>
  </IconButton>
;

Post.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

export default withStyles(styles)(Post);