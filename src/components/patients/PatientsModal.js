import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import { uiCloseModal } from '../../actions/ui';
import { useStyles } from '../assets/componentsStyles';
import {
  patientClearActivePatient,
  patientStartUpdate,
  patientStartAddNew,
} from '../../actions/patients';
import { DeletePatientFab } from '../ui/DeletePatientFab';

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

export const PatientsModal = ({ clickedPatient }) => {
  const classes = useStyles();

  const initPatient = {
    name: clickedPatient && clickedPatient.length ? clickedPatient[0].name : '',
    cpf: clickedPatient && clickedPatient.length ? clickedPatient[0].cpf : '',
    date:
      clickedPatient && clickedPatient.length
        ? moment(clickedPatient[0].date).format('YYYY-MM-DD')
        : '',
    id: clickedPatient && clickedPatient.length ? clickedPatient[0]['_id'] : '',
  };

  const { modalOpen, activeUser } = useSelector(state => state.ui);
  const { patients } = useSelector(state => state.patient);

  const dispatch = useDispatch();

  const [nameIsValid, setNameIsValid] = useState(true);

  const [formValues, setFormValues] = useState({
    initPatient,
  });

  const { name } = formValues;

  const validateActiveUser = () => {
    if (activeUser) {
      const activePatient = patients.filter(
        patient => patient.cpf === activeUser.cpf
      );

      return activePatient;
    }

    return false;
  };

  const handleInputChange = ({ target }) => {
    if (clickedPatient && clickedPatient.length) {
      setFormValues({
        ...formValues.initPatient,
        ...initPatient,
        [target.name]: target.value,
      });
    } else {
      setFormValues({
        ...formValues,
        [target.name]: target.value,
      });
    }
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

    if (clickedPatient) {
      dispatch(patientStartUpdate(formValues));
    } else {
      dispatch(patientStartAddNew(formValues));
    }

    setNameIsValid(true);
    closeModal();
  };

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
            defaultValue={initPatient.name}
            onChange={handleInputChange}
          />
          <TextField
            type="date"
            helperText="Data de nascimento"
            className={(classes.textField, classes.dateField)}
            label=""
            variant="outlined"
            name="date"
            defaultValue={initPatient.date}
            onChange={handleInputChange}
          />
          <TextField
            className={classes.textField}
            label="CPF"
            variant="outlined"
            name="cpf"
            defaultValue={initPatient.cpf}
            onChange={handleInputChange}
          />

          <Button
            type="submit"
            className={classes.button}
            variant="contained"
            color="primary"
          >
            <i className="far fa-save"></i>
            <span>{clickedPatient ? 'Salvar' : 'Adicionar paciente'}</span>
          </Button>
          {clickedPatient ? (
            <DeletePatientFab clickedPatient={clickedPatient} />
          ) : (
            ''
          )}
        </form>
      </Container>
    </Modal>
  );
};
