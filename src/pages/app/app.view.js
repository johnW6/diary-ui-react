import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil/dist';
import '../../assets/stylesheets/font.css';
import '../../assets/stylesheets/reset.css';
import PrivateRoute from '../../components/privateRoute';
import Login from '../login';
import Dashboard from '../dashboards';
import Issues from '../issues';

const AppView = () => (
  <RecoilRoot>
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/">
          <Issues />
        </PrivateRoute>
      </Switch>
    </Router>
  </RecoilRoot>
);

export default AppView;
