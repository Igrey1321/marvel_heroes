import { makeStyles } from '@mui/styles';
import theme from '../../common/theme';

export const useStyles = makeStyles({
  wrapper: {
    display: 'grid',

    gridGap: theme.spacing(3),
    justifyContent: 'center',
  },
  searchInput: {
    width: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(9),
    },
  },
});
