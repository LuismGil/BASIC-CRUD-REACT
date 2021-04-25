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
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
  },
  textField: {
    marginBottom: '15px !important',
  },
  button: {
    margin: '5px !important',
    height: '56px',
    width: '229px',
  },
  navbar: {
    color: 'white',
    display: 'flex',
    flexDirection: 'row !important',
    justifyContent: 'space-around',
  },
  tableBox: {
    margin: '20% auto',
    width: '320px',
  },
  table: {
    border: '1px solid black',
    height: '30px',
    margin: '5px',
    padding: '5px',
    textAlign: 'center',
  },
  cursor: {
    cursor: 'pointer',
  },
  dateField: {
    flexDirection: 'column-reverse !important',
    marginBottom: '15px !important',
    marginTop: '0',
    width: '100%',
  },
}));
