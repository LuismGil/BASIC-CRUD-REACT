import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from 'react-modal';
import { uiCloseModal } from '../../actions/ui';

import { useStyles } from '../assets/componentsStyles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import {
  patientClearActivePatient,
  patientStartUpdate,
  patientStartAddNew,
} from '../../actions/patients';

import moment from 'moment';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
  },
};

if (process.env.NODE_ENV !== 'test') {
  Modal.setAppElement('#root');
}

const initPatient = {
  name: '',
  cpf: '',
  date: '',
};

export const PatientsModal = () => {
  const classes = useStyles();

  const { modalOpen, activeUser } = useSelector(state => state.ui);
  const { activePatient, patients } = useSelector(state => state.patient);

  const dispatch = useDispatch();

  const [nameIsValid, setNameIsValid] = useState(true);

  const [formValues, setFormValues] = useState({
    initPatient,
  });

  const { name, cpf, date } = formValues;

  useEffect(() => {
    if (activePatient) {
      setFormValues(activePatient);
    } else {
      setFormValues(initPatient);
    }
  }, [activePatient, setFormValues]);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const closeModal = () => {
    dispatch(uiCloseModal());
    dispatch(patientClearActivePatient());
    setFormValues(initPatient);
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    if (name.trim().length < 2) {
      return setNameIsValid(false);
    }

    if (activePatient) {
      dispatch(patientStartUpdate(formValues));
    } else {
      dispatch(patientStartAddNew(formValues));
    }

    setNameIsValid(true);
    closeModal();
  };

  const validateActiveUser = (name, date, cpf) => {
    if (activeUser) {
      const activePatient = patients.filter(
        patient => patient.cpf === activeUser.cpf
      );

      return activePatient;
    }

    return false;
  };

  console.log(validateActiveUser());

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
      ariaHideApp={!process.env.NODE_ENV === 'test'}
    >
      <Container className={classes.container} maxWidth="sm">
        <h1> {validateActiveUser() ? 'Editar paciente' : 'Novo paciente'} </h1>
        <hr />
        <form className={classes.form} onSubmit={handleSubmitForm}>
          <TextField
            className={classes.textField}
            label="Nome"
            variant="outlined"
            name="name"
            value={validateActiveUser() ? validateActiveUser()[0].name : name}
            onChange={handleInputChange}
          />
          <TextField
            type="date"
            helperText="Data de nascimento"
            className={(classes.textField, classes.dateField)}
            label=""
            variant="outlined"
            name="date"
            value={validateActiveUser() ? validateActiveUser()[0].date : date}
            onChange={handleInputChange}
          />
          <TextField
            className={classes.textField}
            label="CPF"
            variant="outlined"
            name="cpf"
            value={validateActiveUser() ? validateActiveUser()[0].cpf : cpf}
            onChange={handleInputChange}
          />

          <Button
            type="submit"
            className={classes.button}
            variant="contained"
            color="primary"
          >
            <i className="far fa-save"></i>
            <span> Adicionar paciente</span>
          </Button>
        </form>
      </Container>
    </Modal>
  );
};
