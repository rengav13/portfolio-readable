import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Post from './Post';
import If from '../commom/If';

const styles = {
  emptyPost: {
    margin: '10px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  posts: {
    display: 'flex',
    padding: '5%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  postItem: {
    width: '100%'
  }
};

class Posts extends React.Component {

  render() {
    const { classes, posts } = this.props;

    return (
      <If
        test={ !posts || posts.length === 0 }
        testTrue={
          <Typography className={ classes.emptyPost }>
            There's no posts, please try again!
          </Typography>
        }
        testFalse={
          <ul className={ classes.posts }>
            { posts.map((post) =>
              <li className={ classes.postItem }
                  key={ post.id }
              >
                <Post post={ post }/>
              </li>
            ) }
          </ul>
        }
      />
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array
};

export default withStyles(styles)(Posts);