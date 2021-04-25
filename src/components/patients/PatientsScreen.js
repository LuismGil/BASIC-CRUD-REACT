import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { PatientsModal } from './PatientsModal';

import { uiOpenModal } from '../../actions/ui';

import { useStyles } from '../assets/componentsStyles';

import {
  patientClearActivePatient,
  patientSetActive,
  patientStartLoading,
} from '../../actions/patients';
import { AddNewFab } from '../ui/AddNewFab';
import { DeletePatientFab } from '../ui/DeletePatientFab';
import { Navbar } from '../ui/Navbar';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export const PatientsScreen = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { patients, activePatient } = useSelector(state => state.patient);
  const { modalOpen } = useSelector(state => state.ui);
  const { uid } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(patientStartLoading());
  }, [dispatch]);

  const onDoubleClick = patient => {
    dispatch(uiOpenModal(patient));
  };

  const createData = (cpf, name, date) => {
    return { cpf, name, date };
  };

  const rows = [];
  const formatDate = 'DD-MM-YYYY';

  patients.map(patient => {
    rows.push(
      createData(
        patient.cpf,
        patient.name,
        moment(patient.date).format(formatDate)
      )
    );
  });

  return (
    <div>
      <Navbar />

      <TableContainer component={Paper}>
        <Table size="small" aria-label="Patiens table">
          <TableHead>
            <TableRow>
              <TableCell>CPF</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.cursor}>
            {rows.map(row => (
              <TableRow key={row.cpf} onDoubleClick={() => onDoubleClick(row)}>
                <TableCell component="th" scope="row">
                  {row.cpf}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <AddNewFab />

      {activePatient && <DeletePatientFab />}

      <PatientsModal />
    </div>
  );
};
