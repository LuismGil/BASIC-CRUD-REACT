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

  const { modalOpen } = useSelector(state => state.ui);
  const { activePatient } = useSelector(state => state.patient);

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

  return (
    <Modal
      isOpen={false}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
      ariaHideApp={!process.env.NODE_ENV === 'test'}
    >
      <Container className={classes.container} maxWidth="sm">
        <h1> {activePatient ? 'Editar paciente' : 'Novo paciente'} </h1>
        <hr />
        <form className={classes.form} onSubmit={handleSubmitForm}>
          <TextField
            className={classes.textField}
            label="Nome"
            variant="outlined"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
          <TextField
            className={classes.textField}
            label="Data de Nascimento"
            variant="outlined"
            name="date"
            value={date}
            onChange={handleInputChange}
          />
          <TextField
            className={classes.textField}
            label="CPF"
            variant="outlined"
            name="cpf"
            value={cpf}
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
