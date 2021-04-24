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
    return <h5>Espere...</h5>;
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
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/patients" component={PatientsScreen} />

          <PrivateRoute
            exact
            path="/"
            component={PatientsScreen}
            isAuthenticated={!!uid}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
