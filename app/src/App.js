import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DefaultPage from './pages/DefaultPage';
import UserPage from './pages/UserPage';
import './App.css';

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
