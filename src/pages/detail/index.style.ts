import { makeStyles } from '@mui/styles';
import theme from '../../common/theme';

export const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.light,
  },
  images: {
    maxWidth: theme.spacing(11),
    height: '100%',
    objectFit: 'cover',
  },
  text: {
    padding: theme.spacing(2),
    color: theme.palette.common.white,
  },
  backButton: {
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(2),
    width: theme.spacing(7),
    height: theme.spacing(5),
    backgroundColor: theme.palette.grey['600'],
    color: theme.palette.common.white,
    cursor: 'pointer',
    border: 'none',
    borderRadius: theme.spacing(3),
    fontSize: theme.spacing(4),
  },
});
