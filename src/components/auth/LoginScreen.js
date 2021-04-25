import React from 'react';

import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';

import Swal from 'sweetalert2';

import { useStyles } from '../assets/componentsStyles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: '',
    lPassword: '',
  });

  const { lEmail, lPassword } = formLoginValues;

  const handleLogin = e => {
    e.preventDefault();
    dispatch(startLogin(lEmail, lPassword));
  };

  return (
    <Container className={classes.container} maxWidth="sm">
      <h3 className={classes.title}>Fazer login</h3>
      <form className={classes.form} onSubmit={handleLogin}>
        <TextField
          className={classes.textField}
          id="email-id"
          name="lEmail"
          value={lEmail}
          onChange={handleLoginInputChange}
          label="E-mail"
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          id="password-id"
          name="lPassword"
          value={lPassword}
          onChange={handleLoginInputChange}
          label="Senha"
          variant="outlined"
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Acessar
        </Button>
        <Link to="/register">Criar novo usuario</Link>
      </form>
    </Container>
  );
};
