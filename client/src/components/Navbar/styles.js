import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            padding:'10px 0px'
        },
    },
    heading: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        fontSize: '2em',
        fontWeight: 300,
    },
    image: {
        marginLeft: '10px',
        marginTop: '5px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            width:'auto',
            display:'flex',
            alignItems: 'space-between',
        },
        [theme.breakpoints.down('xs')]: {
            width:'auto',
            display:'flex',
            alignItems: 'space-between',
        },
        [theme.breakpoints.down('md')]: {
            width:'auto',
            display:'flex',
            alignItems: 'space-between',
        },
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
            marginTop: '30px',
        },
    },
    logout: {
        marginLeft: '20px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px',
        },
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px',
        },
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px',
        },
    },
}));