import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import CardHero from '../CardHero';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../app/types';
import { useStyles } from './index.style';

export default function Heroes() {
  const heroesList = useSelector(
    (state: RootStateType) => state.heroes.heroesList,
  );
  const search = useSelector((state: RootStateType) => state.search.search);
  const gender = useSelector((state: RootStateType) => state.filter.gender);
  const classes = useStyles();

  const searchAndFilterHeroes = useMemo(() => {
    const filterHeroes = gender
      ? heroesList.filter((hero) => hero.gender === gender)
      : heroesList;

    return filterHeroes.filter((hero) =>
      hero.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [heroesList, search, gender]);

  return (
    <Box className={classes.wrapper}>
      {searchAndFilterHeroes.map((it) => (
        <CardHero key={it.id} data={it} />
      ))}
    </Box>
  );
}
