import React, { useEffect } from 'react';
import { Grid, Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
// import moment from 'moment';
// import {  useHistory } from 'react-router-dom';
import handleSorting from '../../services/handleSorting.js';
import Drop from '../Buttons/Drop';
import Select from '../Buttons/Select' 
import { IconButton } from '@mui/material';
// import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { getTasks } from '../../actions/tasks';

const Myday = () => {
    const dispatch = useDispatch();
    
    const user = JSON.parse(localStorage.getItem('profile'));
    const id = user.result._id;
    const newDate= new Date();
    const currentDate = newDate.getDate();

    
    useEffect(() => {
        
        dispatch(getTasks(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    const { tasks, isLoading } = useSelector((state) => state.tasks);
 

    return (
        <div>
              <Grid container  style={{  marginBottom: '10px'}} justify="center" alignItems="stretch">
              <Grid container xs={6} sm={9} lg={10} xl = {11}>
              <IconButton href="/">
                    <ArrowBackIcon />
              </IconButton>
              <Typography style={{  marginTop: '10px',textAllign: 'center' }} variant="h5" component="h3">My Day</Typography>
              </Grid>
              <Grid item xs={6} sm={3} lg={2} xl = {1}  >
              <Paper  style={{ padding: '10px', borderRadius: '10px', marginBottom: '10px',textAlign:"center",marginTop:'5px'}} elevation={6}>
              <a href="/newTask" style={{textDecorationLine:"none"}}>Add Task</a>
              </Paper>
              </Grid>
              </Grid>
            
             
             {isLoading ? <div><CircularProgress /></div> : 
                <div>
                    {tasks && tasks.tasks.filter(task=>{
                     let today = task.created;
                      let S = today.toString().split('T')[0];
                         const d = parseInt(S.split('-')[2]);
                     return d === currentDate;
                                     }).filter((task)=>task.Completed === false).sort(handleSorting('newest')).map((task) => (
                            <Paper  key={task._id} style={{ padding: '10px', borderRadius: '15px', marginBottom: '10px' }} elevation={6}>
                               <Grid container  alignItems="center"  >
                             <Grid item xs={2} sm={1} md={1}   container justify = "center">
                               <Select   task={task} />
                             </Grid>
                             <Grid item xs={8} sm={10} md={10}>
                              {task.todo}
                              </Grid> 
                                <Grid item xs={2} sm={1} md={1} container justify = "center">
                                <Drop task = {task}/>
                                </Grid>  
                             </Grid> 
                           </Paper>
                    ))
                    }
                </div>
            } 
             <Divider style={{  marginTop: '30px',marginBottom:'20px' }} variant="middle" />
             
                <Typography style={{  marginBottom: '10px',textAllign: 'center' }} variant="h5" component="h3">Completed Tasks</Typography>
                {isLoading ? <div><CircularProgress /></div> : (
                <div>
                    {tasks && tasks.tasks.filter(task=>{
                             let today = task.created;
                            let S = today.toString().split('T')[0];
                           const d = parseInt(S.split('-')[2]);
                            return d === currentDate;
                             }).filter((task)=>task.Completed === true).sort(handleSorting('newest')).map((task) => (
                                <Paper  key={task._id} style={{ padding: '10px', borderRadius: '15px', marginBottom: '10px',textDecorationColor:'red',textDecorationLine:'line-through' }} elevation={6}>
                             <Grid container  alignItems="center"  >
                             <Grid item xs={2} sm={1} md={1}   container justify = "center">
                               <Select   task={task} />
                             </Grid>
                             <Grid item xs={8} sm={10} md={10}>
                              {task.todo}
                              </Grid> 
                                <Grid item xs={2} sm={1} md={1} container justify = "center">
                                <Drop task = {task}/>
                                </Grid>  
                             </Grid> 
                           </Paper>
                    ))
                    }
                </div>
            )}
             
                     
        </div>
        
    );
};

export default Myday;