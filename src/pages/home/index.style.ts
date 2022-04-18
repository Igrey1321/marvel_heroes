import { makeStyles } from '@mui/styles';
import theme from '../../common/theme';

export const useStyles = makeStyles({
  wrapper: {
    display: 'grid',
    gridGap: theme.spacing(4),
    padding: theme.spacing(2),
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    fontSize: theme.spacing(4),
  },
});
