import { makeStyles } from '@mui/styles';
import theme from '../../common/theme';

export const useStyles = makeStyles({
  wrapper: {
    padding: theme.spacing(3),
    border: '1px solid black',
    width: theme.spacing(9),
    height: '100%',
  },
  image: {
    maxWidth: '100%',
    minHeight: '100%',
    objectFit: 'cover',
  },
  text: {
    padding: theme.spacing(2),
  },
});
