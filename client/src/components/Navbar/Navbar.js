import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'
import { AppBar, Typography, Toolbar, Button, Avatar } from '@material-ui/core';
import useStyles from './styles'
import Logo from '../../images/text.png';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/ActionTypes';
import decode from 'jwt-decode';
import { Grid } from '@mui/material';


const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const userlogout = () => {
        dispatch({ type: LOGOUT })
        setUser(null);
        history.push('/');
        window.location.reload();
    }
    console.log(user);

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) userlogout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Link to="/" className={classes.brandContainer}>
                <img src={Logo} alt="icon" height="60px" />
            </Link>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <Grid className={classes.toolbar}>
                        <Grid container>
                        <Avatar style={{marginRight:"10px"}} item className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography style={{marginRight:"10px"}} item className={classes.userName} variant="h6">{user.result.name}</Typography>
                        </Grid>
                        <div >
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={userlogout} >LogOut</Button>
                        </div>
                        
                    </Grid>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;