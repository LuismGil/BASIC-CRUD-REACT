import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import { useForm } from '../../hooks/useForm';
import { startRegister } from '../../actions/auth';
// import { validateCPF } from '../../helpers/validateCPF';
import { useStyles } from '../assets/componentsStyles';

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

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
    dispatch(startRegister(rName, rEmail, rDate, rCPF, rPassword1));

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
            id="emailReg-id"
            name="rEmail"
            value={rEmail}
            onChange={handleRegisterInputChange}
            label="E-mail"
            variant="outlined"
          />
          <TextField
            type="date"
            className={(classes.textField, classes.dateField)}
            id="dataDeNascimento-id"
            name="rDate"
            value={rDate}
            onChange={handleRegisterInputChange}
            label=""
            variant="outlined"
            helperText="Data de nascimento"
          />
          <TextField
            className={classes.textField}
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            id="cpf-id"
            name="rCPF"
            value={rCPF}
            onChange={handleRegisterInputChange}
            label="CPF: xxx.xxx.xxx-xx"
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
            label="Digite a senha novamente"
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
