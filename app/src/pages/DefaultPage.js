import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';

import { MdAdd } from 'react-icons/md';

import MainBar from '../components/commom/MainBar';
import Posts from "../components/post/Posts";
import PostsOptions from '../components/post/post-options/PostsOptions';
import NewPost from '../components/post/new/NewPost';
import '../App.css';

import { addPost, filterPosts, sortPosts } from '../actions/posts';
import { fetchPosts } from "../actions/posts";

const style = (theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 3
  }
});

class DefaultPage extends Component {

  state = {
    openNewPost: false,
    isFiltered: false
  };

  componentDidMount() {
    const { match } = this.props;

    if (match.params.category) {
      this.props.dispatch(filterPosts({ category: match.params.category }));
      this.setState({ isFiltered: true });
    } else {
      this.props.dispatch(fetchPosts());
      this.setState({ isFiltered: false });
    }
  }

  handleChangeSort = (sort) => this.props.dispatch(sortPosts(sort));

  handleChangeCategory = (category) => this.props.dispatch(filterPosts({ category }));

  handleOpenNewPost = () => this.setState({ openNewPost: true });

  handleAddPost = (post) => {
    this.props.dispatch(addPost(post));
    this.setState({ openNewPost: false });
  };

  handleCloseAddPost = () => this.setState({ openNewPost: false });

  render() {
    const { classes, posts, match } = this.props;
    const { openNewPost, isFiltered } = this.state;

    return (
      <div className="App">
        <MainBar/>

        <PostsOptions
          filterDisable={ isFiltered }
          category={ match.params.category }
          onChangeCategory={ this.handleChangeCategory }
          onChangeSort={ this.handleChangeSort }
        />

        <Divider/>

        <Posts posts={ posts }/>

        <Fab
          className={ classes.fab }
          color="primary"
          aria-label="Add post"
          onClick={ this.handleOpenNewPost }
        >
          <MdAdd/>
        </Fab>
        <NewPost
          open={ openNewPost }
          onSubmit={ this.handleAddPost }
          onCancel={ this.handleCloseAddPost }
        />
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  const filtered = posts ? posts.filter(post => !post.deleted) : [];
  return { posts: filtered };
};

export default connect(mapStateToProps)(withStyles(style)(DefaultPage));
