import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import { patientStartDelete } from '../../actions/patients';
import { useStyles } from '../assets/componentsStyles';
import { uiCloseModal } from '../../actions/ui';

export const DeletePatientFab = ({ clickedPatient }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(patientStartDelete(clickedPatient[0]));
    dispatch(uiCloseModal());
  };

  return (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      onClick={handleDelete}
    >
      <i className="fas fa-trash"></i>
      <span> Apagar paciente</span>
    </Button>
  );
};
