import React from 'react';

import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2';

import { useStyles } from '../assets/componentsStyles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
// import { validateCPF } from '../../helpers/validateCPF';
import { startRegister } from '../../actions/auth';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    rName: '',
    rEmail: '',
    rCPF: '',
    rDate: '',
    rPassword1: '',
    rPassword2: '',
  });

  const {
    rName,
    rEmail,
    rCPF,
    rDate,
    rPassword1,
    rPassword2,
  } = formRegisterValues;

  const handleRegister = e => {
    e.preventDefault();

    if (rPassword1 !== rPassword2) {
      return Swal.fire({
        icon: 'Error',
        title: 'error',
        text: 'As senhas devem ser iguais',
      });
    }
    dispatch(startRegister(rEmail, rPassword1, rName, rCPF, rDate));

    // if (validateCPF(rCPF)) {
    //   return Swal.fire({
    //     icon: 'error',
    //     title: 'Error',
    //     text: 'CPF não existe',
    //   });
    // }

    // const customValidateForm = () => {
    //   if (rPassword1 != rPassword2 && !validateCPF(rCPF)) {
    //     return true;
    //   }

    //   return false;
  };

  return (
    <>
      <Container className={classes.container} maxWidth="sm">
        <h3 className={classes.title}>Cadastra-se</h3>
        <form className={classes.form} onSubmit={handleRegister}>
          <TextField
            className={classes.textField}
            id="nome-id"
            name="rName"
            value={rName}
            onChange={handleRegisterInputChange}
            label="Nome"
            variant="outlined"
          />
          <TextField
            className={classes.textField}
            id="dataDeNascimento-id"
            name="rDate"
            value={rDate}
            onChange={handleRegisterInputChange}
            label="Data de Nascimento"
            variant="outlined"
          />
          <TextField
            className={classes.textField}
            id="cpf-id"
            name="rCPF"
            value={rCPF}
            onChange={handleRegisterInputChange}
            label="CPF"
            variant="outlined"
          />

          <TextField
            className={classes.textField}
            id="emailReg-id"
            name="rEmail"
            value={rEmail}
            onChange={handleRegisterInputChange}
            label="E-mail"
            variant="outlined"
          />
          <TextField
            className={classes.textField}
            id="passwordReg-id1"
            name="rPassword1"
            value={rPassword1}
            onChange={handleRegisterInputChange}
            label="Digite uma senha"
            variant="outlined"
          />
          <TextField
            className={classes.textField}
            id="passwordReg-id2"
            name="rPassword2"
            value={rPassword2}
            onChange={handleRegisterInputChange}
            label="Digite uma senha novamente"
            variant="outlined"
          />
          <Button
            type="submit"
            className={classes.button}
            variant="contained"
            color="primary"
            // disabled={customValidateForm}
          >
            Finalizar Cadastro
          </Button>
          <Link to="/login">Already registered?</Link>
        </form>
      </Container>
    </>
  );
};
