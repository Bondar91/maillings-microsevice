import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Subscribers from '../pages/Subscribers';
import SubscriberLists from '../pages/SubscriberLists';
import Templates from '../pages/Templates';
import Maillings from '../pages/Maillings';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/subscribers" component={Subscribers} />
      <Route exact path="/subscriberLists" component={SubscriberLists} />
      <Route exact path="/templates" component={Templates} />
      <Route exact path="/maillings" component={Maillings} />
    </Switch>
  </BrowserRouter>
);

export default Router;
