import React from 'react';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';

import { useStyles } from '../assets/componentsStyles';
import Button from '@material-ui/core/Button';

export const AddNewFab = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClickNew = () => {
    dispatch(uiOpenModal());
  };

  return (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      onClick={handleClickNew}
    >
      <i className="fas fa-plus"></i>
    </Button>
  );
};
