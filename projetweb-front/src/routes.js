import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './container/Home';
import Admin from './container/Admin';

export default class routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/admin" exact component={Admin} />
      </Switch>
    );
  }
}
