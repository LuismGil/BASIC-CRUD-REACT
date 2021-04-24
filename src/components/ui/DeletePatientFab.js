import React from 'react';
import { useDispatch } from 'react-redux';
import { patientStartDelete } from '../../actions/patients';

import { useStyles } from '../assets/componentsStyles';
import Button from '@material-ui/core/Button';

export const DeletePatientFab = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(patientStartDelete());
  };

  return (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      oonClick={handleDelete}
    >
      <i className="fas fa-trash"></i>
      <span> Apagar paciente </span>
    </Button>
  );
};
