import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 25,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  heading: {
    color: 'rgba(123,183,221, 4)',
    textDecoration: 'none',
  },
  icon:{
    color: 'rgba(123,183,221, 4)',
    marginRight:"5px"
  },
  image: {
    marginLeft: '15px',
  },

  profile: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  underline: {
    textDecoration: 'none',
    // fontStyle:'Italic'
  },
  
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  [theme.breakpoints.down('xs')]: {
    appBar: {
      borderRadius: 35,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  },
}));