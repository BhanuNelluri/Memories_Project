import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { createTask } from '../../actions/tasks';
import { Grid } from '@mui/material';
import { alerterror } from '../../actions/alerts';
import { useHistory } from 'react-router-dom';


const Form = () => {
    const [taskData, setTaskData] = useState({ todo:'' });
    const classes = useStyles();
    const dispatch = useDispatch();
    // const user = JSON.parse(localStorage.getItem('profile'));
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(taskData.todo.length<=5) dispatch(alerterror("Task should be Minimum length of 6"));
        else{
            dispatch(createTask(taskData,history));
            clear();
        } 
    }
    const clear = () => {
        setTaskData({ todo:'' })
        history.push('/myday')
        window.location.reload();
    }

    return (
        <Grid container alignItems="center" justifyContent="center"> 
        <Grid item xs = {12} sm = {9} md = {6} lg={3}>
        <Paper className={classes.paper} elevation={6}>
            <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
                <Typography variant="h6">New Task</Typography>
                <TextField
                    name="todo"
                    variant="outlined"
                    label="Add a task"
                    fullWidth
                    value={taskData.todo}
                    onChange={(e) => setTaskData({ ...taskData, todo: e.target.value })}
                />
              <Grid container style={{margin:"20px 10px"}}>
                 <Grid item xs={6}>
                 <Button 
                  style={{marginRight:"10px"}}
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >CANCEL</Button>
                 </Grid>
                 <Grid item xs={6}>
                 <Button 
                 style={{marginLeft:"10px"}}
                    variant="contained"
                    color="primary"
                    size="small"
                    type="submit"
                    fullWidth
                >ADD</Button>
                
                    </Grid>
              </Grid>
            </form>
        </Paper>
            </Grid>
            </Grid>
    );
}

export default Form;