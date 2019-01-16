import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import MainBar from "../components/commom/MainBar";
import PostDetail from "../components/post/PostDetail";

import { fetchPostById } from "../actions/posts";
import Comments from "../components/comments/Comments";

const style = theme => ({
  notFound: {
    textAlign: 'center',
    margin: theme.spacing.unit * 3
  }
});

class PostPage extends React.Component {

  componentDidMount() {
    const { match } = this.props;
    this.props.dispatch(fetchPostById(match.params.post_id));
  }

  render() {
    const { classes, post } = this.props;

    return (
      <div>
        <MainBar/>

        { !!post && (
          <div>
            <PostDetail post={ post }/>
            <Comments post={ post }/>
          </div>
        ) }

        { !post && (
          <div className={ classes.notFound }>
            Post content not found!
          </div>)
        }

      </div>
    );
  }
}

const mapStateToProps = ({ posts }, props) => {
  const { params } = props.match;

  const post = posts
    .filter(post => post.id === params.post_id)
    .reduce((acc, post) => post, null);

  return { post };
};

PostPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(style)(PostPage));