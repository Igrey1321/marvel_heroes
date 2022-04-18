import React from 'react';
import { Box, TextField } from '@mui/material';
import { useStyles } from './index.style';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchString } from './searchSlice';
import { RootStateType } from '../../app/types';

export default function Search() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const value = useSelector((state: RootStateType) => state.search.search);

  return (
    <Box className={classes.wrapper}>
      <TextField
        className={classes.searchInput}
        id="filled-basic"
        label="Search"
        variant="filled"
        value={value}
        onChange={(e) => dispatch(addSearchString(e.target.value))}
      />
    </Box>
  );
}
