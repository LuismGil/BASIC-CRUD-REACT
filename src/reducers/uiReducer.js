import { types } from '../types/types';

const initialState = {
  modalOpen: false,
  activeUser: '',
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModal:
      console.log('action.payload', action.payload);
      return {
        ...state,
        modalOpen: true,
        activeUser: action.payload,
      };

    case types.uiCloseModal:
      return {
        ...state,
        modalOpen: false,
        activeUser: '',
      };

    default:
      return state;
  }
};
