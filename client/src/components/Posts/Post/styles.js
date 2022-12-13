import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '40px',
    left: '17px',
    color: 'black',
  },
  overlay2: {
    position: 'absolute',
    top: '10px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  title: {
    padding: '10px 16px',
  },
  cardActions: {
    padding: '0 16px 8px 8px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
