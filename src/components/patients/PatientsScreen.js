import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

export const PatientsScreen = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { patients, activePatient } = useSelector(state => state.patient);

  const { uid } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(patientStartLoading());
  }, [dispatch]);

  const onDoubleClick = e => {
    dispatch(uiOpenModal());
  };

  const onSelectPatient = e => {
    dispatch(patientSetActive(e));
  };

  const onSelectSlot = e => {
    dispatch(patientClearActivePatient());
  };

  const patientStyleGetter = (patient, start, end, isSelected) => {
    const style = {
      backgroundColor: uid === patient.user._id ? '#367CF7' : '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white',
    };

    return {
      style,
    };
  };

  return (
    <div>
      <Navbar />
      <table
        className={classes.tableBox}
        patientPropGetter={patientStyleGetter}
        onDoubleClickPatient={onDoubleClick}
        onSelectPatient={onSelectPatient}
        onSelectSlot={onSelectSlot}
        selectable={true}
      >
        <thead>
          <th className={classes.table}>ID</th>

          <th className={classes.table}>Nome</th>
        </thead>
        <tr>
          <td className={classes.table}>124554</td>

          <td className={classes.table}>Carmensilla</td>
        </tr>
        <tr>
          <td className={classes.table}></td>
          <td className={classes.table}></td>
        </tr>
        <tr>
          <td className={classes.table}></td>
          <td className={classes.table}></td>
        </tr>
        <tr>
          <td className={classes.table}></td>
          <td className={classes.table}></td>
        </tr>
        <tr>
          <td className={classes.table}></td>
          <td className={classes.table}></td>
        </tr>
        <tr>
          <td className={classes.table}></td>
          <td className={classes.table}></td>
        </tr>
      </table>
      <AddNewFab />

      {activePatient && <DeletePatientFab />}

      <PatientsModal />
    </div>
  );
};
