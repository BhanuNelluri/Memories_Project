import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import { useDispatch} from 'react-redux';
import { updateTask } from '../../actions/tasks';

export default function StandaloneToggleButton({task}) {
  const [selected, setSelected] = React.useState(task.Completed?true:false);
  const [toggle, settoggle] = React.useState(task.Completed?true:false);
  const dispatch = useDispatch();

  return (
    <ToggleButton 
      value="check"
      color='success'
      selected={selected}
      onChange={() => {
        setSelected(!selected);
        settoggle(!toggle);
        task.Completed = !task.Completed;
        console.log(task);
        dispatch(updateTask(task));
        window.location.reload();
      }}
    >
     {toggle && <CheckIcon style={{ fontSize: "1em" }}/>} 
    </ToggleButton>
  );
}