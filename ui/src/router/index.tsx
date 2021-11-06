import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SubscribersPage } from '../pages/Subscribers';
import { AddSubscriberPage } from '../pages/Subscribers/add';
// import SubscriberLists from '../pages/SubscriberLists';
import Templates from '../pages/Templates';
import Maillings from '../pages/Maillings';
import { Notifications } from '../components';

const Router = () => (
  <BrowserRouter>
    <Notifications />
    <Switch>
      <Route exact path="/subscribers" component={SubscribersPage} />
      <Route exact path="/subscribers/add" component={AddSubscriberPage} />
      {/* <Route exact path="/subscriberLists" component={SubscriberLists} /> */}
      <Route exact path="/templates" component={Templates} />
      <Route exact path="/maillings" component={Maillings} />
    </Switch>
  </BrowserRouter>
);

export default Router;
