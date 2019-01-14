import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DefaultPage from './pages/DefaultPage';
import UserPage from './pages/UserPage';
import './App.css';

/*
  TODO:
    - Link actions from post to properly modal.
    - To show modal to create new post after click on float button.
    - To implement comments list for post in post's list (it must be paged, enable comment add, enable vote comment)

    - To implement message handler (it can be implemented with axios interceptor)

    - To add validation to form views

    - To link category to categry view (List posts by category)
    - To add actions to edit and delete posts
    - To add FloatButton to add post
 */
const App = () =>
  <div className="app">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={ true } component={ DefaultPage }/>
        <Route path="/user" component={ UserPage }/>
      </Switch>
    </BrowserRouter>
  </div>;

export default App;
