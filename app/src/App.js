import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DefaultPage from './pages/DefaultPage';
import PostPage from './pages/PostPage';
import './App.css';

/*
  TODO:
    - To add validation to validate form views
    - To implement message handler (it can be implemented with axios interceptor)
    - To add a global loading, can be made with axios.interceptors

    - To refactor modals (Edit and Delete, posts and comments)
    - To refactor Post and Comment Actions
 */
// TODO: If the post don't exist it must show the 404 Page.
// { match.params.category }
const App = () =>
  <div className="app">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={ true } component={ DefaultPage }/>
        <Route path="/:category" exact={ true } component={ DefaultPage }/>
        <Route path="/:category/:post_id" component={ PostPage }/>
      </Switch>
    </BrowserRouter>
  </div>;

export default App;
