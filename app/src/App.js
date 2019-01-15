import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DefaultPage from './pages/DefaultPage';
import PostPage from './pages/PostPage';
import './App.css';

/*
  TODO:
    - To implement post detail view
    - To implement comments list for post in post's list (it must be paged, enable comment add, enable vote comment)
    - To add validation to validate form views
    - To link category to categry view (List posts by category)

    - To implement category view

    - To implement message handler (it can be implemented with axios interceptor)
    - To add a global loading, can be made with axios.interceptors
 */
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
