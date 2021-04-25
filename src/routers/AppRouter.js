import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../components/auth/LoginScreen';

import { PatientsScreen } from '../components/patients/PatientsScreen';
import { startChecking } from '../actions/auth';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return (
      <div className="loading-spinner">
        <div className="loading-spinner--item">
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={!!uid}
          />
          <PublicRoute
            exact
            path="/register"
            component={RegisterScreen}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/patients"
            component={PatientsScreen}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/"
            component={PatientsScreen}
            isAuthenticated={!!uid}
          />
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
};
