import React from 'react';
import {Grow, Grid, Container, Paper, AppBar,Typography} from '@material-ui/core';
import useStyles from './styles';


const Home = () => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
   

    if (!user?.result?.name) {
        return (
            <Grid container justify="center" alignItems="stretch">
            <Grid item xs={12} sm={6} style = {{marginTop:"30px"}} >
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center" style = {{padding:"20px"}}>
                    Please SignIn/SignUp to start with your tasks.
                </Typography>
            </Paper>
            </Grid>
            </Grid>
        );
    }

    return (
            <Grow in>
            <Container>
                <Grid container justify="center"  alignItems="stretch" className={classes.gridContainer}>
                    <Grid item xs={12} sm={6}>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit"  style={{ align: "center" }}>
                        <a style={{ textDecoration: 'none',fontWeight:'600' }} href="/myday">My Day</a>
                        </AppBar>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit"  style={{ align: "center" }}>
                        <a href="/important" style={{ textDecoration: 'none',fontWeight:'600' }}>Important Tasks </a>
                        </AppBar>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit"  style={{ align: "center" }}>
                           <a href="/tasks" style={{ textDecoration: 'none',fontWeight:'600' }}>Tasks</a>
                        </AppBar>
                    </Grid>
                </Grid>
                 </Container>
            
        </Grow>
       
    );
}

export default Home;
