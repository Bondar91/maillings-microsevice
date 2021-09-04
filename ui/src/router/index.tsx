import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Subscribers from '../pages/Subscribers';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/subscribers" component={Subscribers} />
    </Switch>
  </BrowserRouter>
);

export default Router;
