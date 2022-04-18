import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useStyles } from './index.style';
import Service from '../../app/service';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { addHero } from './detailSlice';
import { RootStateType } from '../../app/types';

export default function Index() {
  const classes = useStyles();
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hero = useSelector((state: RootStateType) => state.hero.hero);

  if (!params) {
    return null;
  }

  const { fetching, isLoading } = useFetch(async () => {
    const responseHero = await Service.getHero(Number(params.id));

    dispatch(
      addHero({
        fullName: responseHero.biography.fullName,
        gender: responseHero.appearance.gender,
        race: responseHero.appearance.race,
        image: responseHero.images.lg,
        power: responseHero.powerstats.power,
        speed: responseHero.powerstats.speed,
      }),
    );
  });

  useEffect(() => {
    fetching();
  }, []);

  if (isLoading) {
    return <Box className={classes.wrapper}>Loading</Box>;
  }

  if (!hero) {
    return null;
  }

  return (
    <Box className={classes.wrapper}>
      <img className={classes.images} src={hero.image} alt={hero.fullName} />

      <Typography
        className={classes.text}
        gutterBottom
        variant="h3"
        component="div"
      >
        Full Name: {hero.fullName}
      </Typography>

      <Typography className={classes.text} variant="h4">
        Gender: {hero.gender}
      </Typography>

      <Typography className={classes.text} variant="h4">
        Race: {hero.race}
      </Typography>

      <Typography className={classes.text} variant="h4">
        Power: {hero.power}
      </Typography>

      <Typography className={classes.text} variant="h4">
        Speed: {hero.speed}
      </Typography>

      <button className={classes.backButton} onClick={() => navigate('/')}>
        Back
      </button>
    </Box>
  );
}
