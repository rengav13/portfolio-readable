import React, { Component } from 'react';
import { connect } from 'react-redux';

import Divider from '@material-ui/core/Divider';

import MainBar from '../components/MainBar';
import Posts from "../components/post/Posts";
import PostsOptions from '../components/post/post-options/PostsOptions';
import '../App.css';

import { filterPosts, sortPosts } from '../actions/index';

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
class DefaultPage extends Component {

  handleChangeSort = (sort) => this.props.dispatch(sortPosts(sort));

  handleChangeCategory = (category) => this.props.dispatch(filterPosts({ category }));

  render() {
    const { posts } = this.props;

    return (
      <div className="App">
        <MainBar/>

        <PostsOptions
          onChangeCategory={ this.handleChangeCategory }
          onChangeSort={ this.handleChangeSort }
        />

        <Divider/>

        <Posts posts={ posts }/>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  let postsArray = [];
  if (posts)
    postsArray = Object.keys(posts).map(id => posts[ id ]);
  return { posts: postsArray };
};

export default connect(mapStateToProps)(DefaultPage);
