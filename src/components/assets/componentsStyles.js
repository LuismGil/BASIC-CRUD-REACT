import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    margin: '15px',
    textAlign: 'center',
  },
  description: {
    color: 'green',
  },
  container: {
    border: '1px solid black',
    margin: '20% auto',
    width: '300px !important',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
  },
  textField: {
    marginBottom: '15px !important',
  },
  button: {
    margin: '5px !important',
    width: '229px',
    height: '56px',
  },
  navbar: {
    color: 'white',
    display: 'flex',
    flexDirection: 'row !important',
    justifyContent: 'space-around',
  },
  tableBox: {
    width: '320px',
    margin: '20% auto',
  },
  table: {
    textAlign: 'center',
    border: '1px solid black',
    padding: '5px',
    margin: '5px',
    height: '30px',
  },
}));
