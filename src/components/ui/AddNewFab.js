import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import { uiOpenModal } from '../../actions/ui';

export const AddNewFab = () => {
  const dispatch = useDispatch();

  const handleClickNew = () => {
    dispatch(uiOpenModal());
  };

  return (
    <Button
      className="btn__add"
      variant="contained"
      color="primary"
      onClick={handleClickNew}
    >
      <i className="fas fa-plus"></i>
    </Button>
  );
};
