import Swal from 'sweetalert2';

import { types } from '../types/types';
import { fetchWithToken } from '../helpers/fetch';
import { preparePatients } from '../helpers/preparePatients';

export const patientStartAddNew = patient => {
  return async (dispatch, getState) => {
    const { uid, name } = getState().auth;

    try {
      const resp = await fetchWithToken('patients', patient, 'POST');
      const body = await resp.json();

      console.log(body);

      if (body.ok) {
        patient.id = body.patient.id;
        patient.user = {
          _id: uid,
          name: name,
        };
        console.log(patient);
        dispatch(patientAddNew(patient));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const patientAddNew = patient => ({
  type: types.patientAddNew,
  payload: patient,
});

export const patientSetActive = patient => ({
  type: types.patientSetActive,
  payload: patient,
});

export const patientClearActivePatient = () => ({
  type: types.patientClearActivePatient,
});

export const patientStartUpdate = patient => {
  return async dispatch => {
    try {
      const resp = await fetchWithToken(
        `patients/${patient.id}`,
        patient,
        'PUT'
      );
      const body = await resp.json();

      if (body.ok) {
        dispatch(patientUpdated(patient));
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const patientUpdated = patient => ({
  type: types.patientUpdated,
  payload: patient,
});

export const patientStartDelete = () => {
  return async (dispatch, getState) => {
    const { id } = getState().patient.activePatient;
    try {
      const resp = await fetchWithToken(`patients/${id}`, {}, 'DELETE');
      const body = await resp.json();

      if (body.ok) {
        dispatch(patientDeleted());
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const patientDeleted = () => ({
  type: types.patientDeleted,
});

export const patientStartLoading = () => {
  return async dispatch => {
    try {
      const resp = await fetchWithToken('patients');
      const body = await resp.json();

      const patients = preparePatients(body.patients);
      dispatch(patientLoaded(patients));
    } catch (error) {
      console.log(error);
    }
  };
};

const patientLoaded = patients => ({
  type: types.patientLoaded,
  payload: patients,
});

export const patientLogout = () => ({ type: types.patientLogout });
