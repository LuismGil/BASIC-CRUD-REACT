import { types } from '../types/types';

const initialState = {
  patients: [],
  activePatient: null,
};

export const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.patientSetActive:
      return {
        ...state,
        activePatient: action.payload,
      };

    case types.patientAddNew:
      return {
        ...state,
        patients: [...state.patients, action.payload],
      };

    case types.patientClearActivePatient:
      return {
        ...state,
        activePatient: null,
      };

    case types.patientUpdated:
      return {
        ...state,
        patients: state.patients.map(e =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case types.patientDeleted:
      return {
        ...state,
        patients: state.patients.filter(e => e.id !== action.payload['_id']),
        activePatient: null,
      };

    case types.patientLoaded:
      return {
        ...state,
        patients: [...action.payload],
      };

    case types.patientLogout:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
