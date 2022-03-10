import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import {Grid} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch} from 'react-redux';
import { deleteTask, updateTask } from '../../actions/tasks';
import moment from 'moment';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const ITEM_HEIGHT = 48;

export default function LongMenu({task}) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ClickDelete = ()=>{
     dispatch(deleteTask(task._id));
     handleClose();
     window.location.reload();
  };
  const ClickImportant = ()=>{
    task.Important = !task.Important;
    dispatch(updateTask(task));
    handleClose();
    window.location.reload();
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
       <MenuItem key="Delete"  onClick={ClickDelete}>
            Delete
          </MenuItem>
          <MenuItem key="Important"  onClick={ClickImportant}>
            {!task.Important? "Mark as Important": "Unimportant"}
          </MenuItem>
          <Grid container  style={{margin:"10px 10px",alignItems:"flex-start"}}>
           <ErrorOutlineIcon fontSize="small" />
           <div style={{marginLeft:"5px"}}>
           {moment(task.created).fromNow()}
           </div>
           
          </Grid>
      </Menu>
    </div>
  );
}