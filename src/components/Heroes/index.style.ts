import { makeStyles } from '@mui/styles';
import theme from '../../common/theme';

export const useStyles = makeStyles({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: theme.spacing(4),
    justifyItems: 'center',
    [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
    },
  },
});
