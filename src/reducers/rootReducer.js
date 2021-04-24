import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { patientReducer } from './patientReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  patient: patientReducer,
  auth: authReducer,
});
