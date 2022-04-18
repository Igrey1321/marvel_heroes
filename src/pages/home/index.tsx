import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useStyles } from './index.style';
import useFetch from '../../hooks/useFetch';
import Service from '../../app/service';
import { useDispatch } from 'react-redux';
import { addHeroesList } from '../../components/Heroes/heroesSlice';
import Heroes from '../../components/Heroes';
import { Hero } from '../../components/CardHero/types';
import Search from '../../components/Search';
import Filter from '../../components/Filter';

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { fetching, isLoading } = useFetch(async () => {
    const responseHeroes = await Service.getHeroes();

    const sliceHeroesList: sliceHeroesListType[] = responseHeroes.slice(0, 50);

    const heroesList = sliceHeroesList.reduce<Hero[]>((acc, it) => {
      const {
        id,
        name,
        appearance: { gender },
        work: { occupation },
        images: { md },
      } = it;
      acc.push({
        id,
        name,
        gender,
        occupation,
        image: md,
      });

      return acc;
    }, []);

    dispatch(addHeroesList(heroesList));
  });

  useEffect(() => {
    fetching();
  }, []);

  if (isLoading) {
    return <Box className={classes.loading}>Loading</Box>;
  }

  return (
    <Box className={classes.wrapper}>
      <Search />

      <Filter />

      <Heroes />
    </Box>
  );
}
