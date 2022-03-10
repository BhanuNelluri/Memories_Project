/* eslint-disable import/no-anonymous-default-export */

import { FETCH_ALL,UPDATE,  START_LOADING, END_LOADING, DELETE, CREATE } from '../constants/ActionTypes';

export default  (state = { isLoading: true, tasks: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL:
            return {
                ...state,
                tasks: action.payload,
            }
        case DELETE:
            return { ...state, tasks: state.tasks.filter((task) => task._id !== action.payload) };
        case CREATE:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case UPDATE:
            return { ...state, tasks: state.tasks.map((post) => post._id === action.payload._id ? action.payload : post) };
        default:
            return state;
    }
}