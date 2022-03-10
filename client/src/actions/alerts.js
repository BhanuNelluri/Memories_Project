import { SUCCESS, ERROR, CLEAR } from '../constants/ActionTypes';



export const success = (message) => {
  return { type: SUCCESS, message };
}

export const alerterror = (message) => {
  return { type: ERROR, message };
}

export const clear = () => {
  return { type: CLEAR };
}