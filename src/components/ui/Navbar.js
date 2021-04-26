import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import { startLogout } from '../../actions/auth';
import { useStyles } from '../assets/componentsStyles';

export const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div>
      <AppBar className={classes.navbar} position="static">
        <span>Doctor: {name}</span>
        <Button onClick={handleLogout} color="inherit">
          <i className="fas fa-sign-out-alt"> Sair</i>
        </Button>
      </AppBar>
    </div>
  );
};
