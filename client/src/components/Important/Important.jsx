import React, { useEffect } from 'react';
import { Grid, Paper, Typography, CircularProgress } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
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
    console.log(id);
    useEffect(() => {
        dispatch(getTasks(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    const { tasks, isLoading } = useSelector((state) => state.tasks);
    console.log(tasks);

    return (
        <div>
            <Grid container xs={12} alignItems="flex-start" style={{marginBottom:"20px"}}  >
               <IconButton href="/">
                    <ArrowBackIcon />
              </IconButton>
             <Typography style={{  marginTop: '5px',textAllign: 'center' }} variant="h5" component="h3">Important Tasks</Typography>
             </Grid>
             {isLoading ? <div><CircularProgress /></div> : 
                <div>
                    {tasks && tasks.tasks.filter((task)=>task.Completed === false).sort(handleSorting('newest')).filter((task)=>task.Important === true).map((task) => (
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
             
        </div>
        
    );
};

export default Myday;