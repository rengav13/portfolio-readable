import React, { Component } from 'react';
import MainBar from '../components/MainBar';
import Posts from "../components/post/Posts";
import '../App.css';

class DefaultPage extends Component {

  state = {
    posts: [
      {
        id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'udacity',
        voteScore: 6,
        deleted: false,
        commentCount: 10
      },
      {
        id: '6ni6ok3ym7mf1p33lnez',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body: 'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'redux',
        voteScore: -5,
        deleted: false,
        commentCount: 0
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <header className='main-bar'>
          <MainBar/>
        </header>
        <div className='content'>
          <Posts posts={ posts }/>
        </div>

      </div>
    );
  }
}

export default DefaultPage;
