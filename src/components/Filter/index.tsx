import React from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { addFilterString } from './filterSlice';
import { RootStateType } from '../../app/types';
import { useStyles } from './index.style';

export default function Filter() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const gender = useSelector((state: RootStateType) => state.filter.gender);

  return (
    <Box className={classes.wrapper}>
      <Typography variant="h4">Filter</Typography>

      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              value="Male"
              checked={gender === 'Male'}
              onChange={(e) => {
                gender === 'Male'
                  ? dispatch(addFilterString(''))
                  : dispatch(addFilterString(e.target.value));
              }}
            />
          }
          label="Male"
        />

        <FormControlLabel
          control={
            <Checkbox
              value="Female"
              checked={gender === 'Female'}
              onChange={(e) => {
                gender === 'Female'
                  ? dispatch(addFilterString(''))
                  : dispatch(addFilterString(e.target.value));
              }}
            />
          }
          label="Female"
        />
      </FormGroup>
    </Box>
  );
}
