import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import ErrorPage from './views/ErrorPage/ErrorPage';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import EditPost from './views/EditPost/EditPost';

class AppRouter extends Component {
    
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/edit:id" component={EditPost}></Route>
          <Route component={ErrorPage}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouter;