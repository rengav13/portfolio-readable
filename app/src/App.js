import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

import DefaultPage from './pages/DefaultPage';
import PostPage from './pages/PostPage';
import MessageAlert from './components/message/MessageAlert';

import './App.css';

/*
  TODO:
    - To add a global loading, can be made with axios.interceptors
    - To implement message handler (it can be implemented with axios interceptor)
    - To add validation to validate form views

    - To refactor modals (Edit and Delete, posts and comments) [To add validation]
    - To refactor Post and Comment Actions
    - To improve 404 page view, when post don't exists.
 */
const App = ({ message }) =>
  <div className="app">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={ true } component={ DefaultPage }/>
        <Route path="/:category" exact={ true } component={ DefaultPage }/>
        <Route path="/:category/:post_id" component={ PostPage }/>
      </Switch>
    </BrowserRouter>
    <MessageAlert message={ message }/>
  </div>;

const mapStateToProps = ({ message }) => ({ message: message.error });

export default connect(mapStateToProps)(App);
