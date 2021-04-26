import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { PatientsModal } from './PatientsModal';
import { uiOpenModal } from '../../actions/ui';
import { useStyles } from '../assets/componentsStyles';
import { patientStartLoading } from '../../actions/patients';
import { AddNewFab } from '../ui/AddNewFab';
import { Navbar } from '../ui/Navbar';

export const PatientsScreen = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { patients } = useSelector(state => state.patient);
  const { activeUser } = useSelector(state => state.ui);

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
  const formatDate = 'YYYY-MM-DD';

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

      <PatientsModal
        clickedPatient={
          patients &&
          activeUser &&
          patients.filter(patient => patient.cpf === activeUser.cpf)
        }
      />
    </div>
  );
};
