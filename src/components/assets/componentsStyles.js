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
  container: {
    backgroundColor: 'white',
    border: '1px solid black',
    boxShadow: '0 2px 10px 4px #5014ff45',
    display: 'flex',
    flexDirection: 'column',
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
    width: '100%',
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
    padding: '10px 0',
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
