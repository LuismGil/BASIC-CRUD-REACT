import { types } from '../types/types';

export const uiOpenModal = patient => ({
  type: types.uiOpenModal,
  payload: patient,
});
export const uiCloseModal = () => ({ type: types.uiCloseModal });
