import * as api from '../api';
import { AUTH } from '../constants/ActionTypes';
import { success, alerterror } from './alerts';

export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        history.push('/');
        dispatch(success(`Welcome ${data.result.name}!`))
    } catch (error) {
        dispatch(alerterror("Username or password is incorrect"));
        console.log(error);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data });
        history.push('/');
        dispatch(success(`Welcome ${data.result.name}!`))
    } catch (error) {
        dispatch(alerterror("Passwords Don't Match"));
        console.log(error);
    }
}